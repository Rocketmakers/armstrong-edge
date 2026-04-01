'use strict';

const { execSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const config = require('../../.commit-config');

const { czCustomizable } = config;
const TYPES = czCustomizable.types;
const SCOPES = czCustomizable.scopes;
const MAX_DIFF_CHARS = 12000;

/**
 * Get the staged diff and stat summary.
 */
function getStagedChanges() {
  const execOpts = { encoding: 'utf-8', maxBuffer: 1024 * 1024 * 20 };
  const stat = execSync('git diff --cached --stat', execOpts).trim();
  let diff = execSync('git diff --cached', execOpts);

  if (diff.length > MAX_DIFF_CHARS) {
    diff = diff.slice(0, MAX_DIFF_CHARS) + '\n\n... (diff truncated for brevity)';
  }

  return { stat, diff };
}

/**
 * Call Claude CLI to generate a commit message suggestion.
 */
function getAiSuggestion(stat, diff) {
  const typeNames = TYPES.map(t => t.value);
  const scopeNames = SCOPES.map(s => s.name).filter(Boolean);

  const prompt = `You are a commit message generator for Armstrong Edge, a React component library by Rocketmakers.

Analyze the staged diff below and suggest a conventional commit message.

RULES:
- Types: ${typeNames.join(', ')}
- Scopes: ${scopeNames.join(', ')}  (pick one if relevant, or leave empty string — scope is optional)
- Subject: imperative mood, lowercase start, no trailing period, max 200 chars
- Body: 1-3 sentences explaining WHY the change was made and what it affects. Always provide a body — we want detailed changelogs. Leave empty string ONLY for truly trivial changes (typos, formatting)
- "feat" = wholly new feature, "fix" = bug fix, "refactor" = restructure without behaviour change, "chore" = config/deps/tooling
- "WIP" = work in progress (only if the diff looks clearly incomplete)

DIFF STATS:
${stat}

DIFF:
${diff}

BREAKING CHANGES:
- If the diff contains breaking changes (dropped support, removed APIs, changed peerDependencies major versions, renamed public exports, changed component prop signatures), set "breaking" to a short description of what breaks
- semantic-release uses "BREAKING CHANGE:" in the commit footer to trigger a major version bump, so getting this right matters

Respond with ONLY valid JSON, no markdown fences:
{"type":"<type>","scope":"<scope or empty string>","subject":"<subject>","body":"<body or empty string>","breaking":"<breaking change description or empty string>"}`;

  let result;
  try {
    result = execSync('claude -p --model sonnet', {
      input: prompt,
      encoding: 'utf-8',
      timeout: 60000,
      maxBuffer: 1024 * 1024 * 10,
    });
  } catch (err) {
    const code = err.status ?? err.code ?? 'unknown';
    const stderr = (err.stderr || '').toString().trim();
    throw new Error(`claude CLI failed (${code})${stderr ? ': ' + stderr : ''}`);
  }

  const jsonMatch = result.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('Could not parse AI response: ' + result.slice(0, 200));
  try {
    return JSON.parse(jsonMatch[0]);
  } catch {
    throw new Error('Invalid JSON from AI: ' + jsonMatch[0].slice(0, 200));
  }
}

/**
 * Capitalize the first letter of a string.
 */
function capitalize(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Wait for a single keypress. Returns the key code.
 */
function waitForKey() {
  return new Promise(resolve => {
    const { stdin } = process;
    const wasRaw = stdin.isRaw;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.once('data', data => {
      stdin.setRawMode(wasRaw);
      stdin.pause();
      resolve(data[0]);
    });
  });
}

/**
 * Open $EDITOR with content, return edited content.
 */
function openEditor(content) {
  const tmpFile = path.join(os.tmpdir(), `cz-ai-${Date.now()}.txt`);
  fs.writeFileSync(tmpFile, content, 'utf-8');

  const editor = process.env.VISUAL || process.env.EDITOR || 'vi';
  try {
    execSync(`${editor} "${tmpFile}"`, { stdio: 'inherit' });
  } catch {
    fs.unlinkSync(tmpFile);
    return null;
  }

  const result = fs.readFileSync(tmpFile, 'utf-8');
  fs.unlinkSync(tmpFile);
  return result;
}

/**
 * Append BREAKING CHANGE footer to a commit message if present.
 */
function appendBreaking(msg, breaking) {
  if (breaking) return msg + `\n\nBREAKING CHANGE: ${breaking}`;
  return msg;
}

/**
 * Parse editor content into subject + body, stripping comment lines.
 */
function parseEditorContent(content) {
  const lines = content.split('\n').filter(line => !line.startsWith('#'));
  const subject = (lines[0] || '').trim();
  const bodyStart = lines.indexOf('');
  const body =
    bodyStart >= 0
      ? lines
          .slice(bodyStart + 1)
          .join('\n')
          .trim()
      : '';
  return { subject, body };
}

module.exports = {
  prompter(cz, commit) {
    // Check for staged changes
    const staged = execSync('git diff --cached --name-only', { encoding: 'utf-8' }).trim();
    if (!staged) {
      console.log('\n  No staged changes. Run `git add` first.\n');
      return;
    }

    const { stat, diff } = getStagedChanges();

    // Generate AI suggestion
    let ai = null;
    process.stdout.write('\n  Generating AI suggestion...');
    try {
      ai = getAiSuggestion(stat, diff);
      const scopeDisplay = ai.scope ? `(${ai.scope})` : '';
      console.log(` done!\n\n  Suggestion: ${ai.type}${scopeDisplay}: ${ai.subject}\n`);
    } catch (err) {
      console.log(` unavailable (${err.message})\n  Proceeding with manual entry.\n`);
    }

    // Headless mode (no TTY) — auto-accept the AI suggestion
    if (process.env.CZ_AI_HEADLESS === '1') {
      if (!ai) {
        console.log('  No AI suggestion available in headless mode. Aborting.\n');
        return;
      }
      const scopePart = ai.scope ? `(${ai.scope})` : '';
      let msg = `${ai.type}${scopePart}: ${ai.subject}`;
      if (ai.body) msg += `\n\n${ai.body}`;
      msg = appendBreaking(msg, ai.breaking);
      console.log(`  Headless mode — auto-accepting AI suggestion.\n`);
      commit(msg);
      return;
    }

    // Find default indices for AI-suggested values
    const defaultTypeIdx = ai
      ? Math.max(
          TYPES.findIndex(t => t.value === ai.type),
          0,
        )
      : 0;
    const scopeChoices = SCOPES.map(s => s.name || '(none)');
    const defaultScopeIdx = ai
      ? Math.max(
          scopeChoices.findIndex(s => s === ai.scope),
          0,
        )
      : 0;

    // Step 1: type + scope selection
    cz.prompt([
      {
        type: 'list',
        name: 'type',
        message: 'Type of change:',
        choices: TYPES,
        default: defaultTypeIdx,
      },
      {
        type: 'list',
        name: 'scope',
        message: 'Scope:',
        choices: scopeChoices,
        default: defaultScopeIdx,
      },
    ]).then(async answers => {
      const scope = answers.scope === '(none)' ? '' : answers.scope;
      const scopePart = scope ? `(${scope})` : '';
      const aiSubject = ai ? capitalize(ai.subject) : '';
      const aiBody = ai?.body || '';
      const aiBreaking = ai?.breaking || '';

      // Step 2: show AI message preview and wait for Enter/Tab
      if (ai) {
        console.log('\n  ┌─────────────────────────────────────────────');
        console.log(`  │ ${answers.type}${scopePart}: ${aiSubject}`);
        if (aiBody) {
          console.log('  │');
          aiBody.split('\n').forEach(line => console.log(`  │ ${line}`));
        }
        if (aiBreaking) {
          console.log('  │');
          console.log(`  │ ⚠ BREAKING CHANGE: ${aiBreaking}`);
        }
        console.log('  └─────────────────────────────────────────────');
        console.log('\n  Enter = accept  │  Tab = edit  │  Ctrl+C = abort\n');

        const key = await waitForKey();

        if (key === 0x03) {
          // Ctrl+C
          console.log('\n  Aborted.\n');
          return;
        }

        if (key === 0x09) {
          // Tab — open editor
          const draftLines = [
            aiSubject,
            '',
            aiBody,
          ];
          if (aiBreaking) {
            draftLines.push('', `BREAKING CHANGE: ${aiBreaking}`);
          }
          draftLines.push(
            '',
            '# ────────────────────────────────────────────',
            '# Line 1 = subject, blank line, then body.',
            '# Add "BREAKING CHANGE: ..." for major bumps.',
            '# Lines starting with # are stripped.',
            `# Type/scope: ${answers.type}${scopePart}`,
            '# ────────────────────────────────────────────',
          );
          const draft = draftLines.join('\n');

          const edited = openEditor(draft);
          if (edited === null) {
            console.log('\n  Editor error. Aborting commit.\n');
            return;
          }

          const { subject, body } = parseEditorContent(edited);
          if (!subject) {
            console.log('\n  Empty subject. Aborting commit.\n');
            return;
          }

          let msg = `${answers.type}${scopePart}: ${capitalize(subject)}`;
          if (body) msg += `\n\n${body}`;
          commit(msg);
          return;
        }

        // Enter (or any other key) — accept AI suggestion
        let msg = `${answers.type}${scopePart}: ${aiSubject}`;
        if (aiBody) msg += `\n\n${aiBody}`;
        msg = appendBreaking(msg, aiBreaking);
        commit(msg);
      } else {
        // No AI available — go straight to editor
        const draft = [
          '',
          '',
          '# ────────────────────────────────────────────',
          '# Line 1 = subject, blank line, then body.',
          '# Lines starting with # are stripped.',
          `# Type/scope: ${answers.type}${scopePart}`,
          '# ────────────────────────────────────────────',
        ].join('\n');

        const edited = openEditor(draft);
        if (edited === null) {
          console.log('\n  Editor error. Aborting commit.\n');
          return;
        }

        const { subject, body } = parseEditorContent(edited);
        if (!subject) {
          console.log('\n  Empty subject. Aborting commit.\n');
          return;
        }

        let msg = `${answers.type}${scopePart}: ${capitalize(subject)}`;
        if (body) msg += `\n\n${body}`;
        commit(msg);
      }
    });
  },
};
