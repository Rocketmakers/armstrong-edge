'use strict';

const { execFileSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const config = require('../../.commit-config');

const { czCustomizable } = config;
const TYPES = czCustomizable.types;
const VALID_TYPES = TYPES.map(t => t.value);
const SCOPES = czCustomizable.scopes;
const SCOPE_NAMES = SCOPES.map(s => s.name).filter(Boolean);
const DEFAULT_TYPE = VALID_TYPES.includes('chore') ? 'chore' : VALID_TYPES[0];
const MAX_DIFF_CHARS = 12000;
const MAX_BUFFER = 1024 * 1024 * 20;

// Key codes for interactive prompt
const KEY_CTRL_C = 0x03;
const KEY_ENTER = 0x0d;
const KEY_TAB = 0x09;
const KEY_ESC = 0x1b;
const NO_SCOPE = '(none)';

const DEFAULT_MODEL = config.ai?.defaultModel || 'google/gemini-2.5-flash-lite';
const MAX_BOX_WIDTH = 100;

// Pinned at the top of the model picker for quick access
const FAVORITE_MODELS = [
  'google/gemini-2.5-flash-lite',
  'openai/gpt-5.4-nano',
  'openai/gpt-5.4-mini',
  'google/gemini-2.5-flash',
  'anthropic/claude-haiku-4.5',
];

// ── Settings loading ──────────────────────────────────────────────

function parseLenientJson(text) {
  const chunks = [];
  let inString = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];

    if (inString) {
      chunks.push(ch);
      if (ch === '\\' && i + 1 < text.length) {
        chunks.push(text[++i]);
      } else if (ch === '"') {
        inString = false;
      }
      continue;
    }

    if (ch === '"') {
      inString = true;
      chunks.push(ch);
    } else if (ch === '/' && text[i + 1] === '/') {
      while (i < text.length && text[i] !== '\n') i++;
      i--; // outer loop will increment
    } else if (ch === '/' && text[i + 1] === '*') {
      i += 2;
      while (i < text.length - 1 && !(text[i] === '*' && text[i + 1] === '/')) i++;
      i++; // skip past '/'
    } else {
      chunks.push(ch);
    }
  }

  const result = chunks.join('').replace(/,(\s*[}\]])/g, '$1');
  return JSON.parse(result);
}

function loadVSCodeSettings() {
  const platformDirs = {
    darwin: path.join(os.homedir(), 'Library', 'Application Support'),
    win32: process.env.APPDATA || '',
  };
  const base = platformDirs[process.platform] ?? path.join(os.homedir(), '.config');
  const settingsPath = path.join(base, 'Code', 'User', 'settings.json');

  try {
    return parseLenientJson(fs.readFileSync(settingsPath, 'utf-8'));
  } catch {
    return {};
  }
}

function resolveSettings() {
  const vscode = loadVSCodeSettings();

  const model =
    process.env.CZ_AI_MODEL ||
    vscode['harry-cz.ai.model'] ||
    DEFAULT_MODEL;

  return {
    model,
    skipModel: vscode['harry-cz.ai.skip-model-choice'] === true,
    largeDiffThreshold: vscode['harry-cz.ai.large-diff-threshold'] ?? LARGE_DIFF_CHARS,
    smallModel: vscode['harry-cz.ai.small-model'] ?? 'google/gemini-2.5-flash-lite',
    largeModel: vscode['harry-cz.ai.large-model'] ?? 'google/gemini-2.5-flash',
    smallCliModel: vscode['harry-cz.ai.small-cli-model'] ?? 'haiku',
    largeCliModel: vscode['harry-cz.ai.large-cli-model'] ?? 'sonnet',
    directOpenAiSmallModel: vscode['harry-cz.ai.direct-openai-small-model'] ?? 'gpt-5.4-mini',
    directOpenAiLargeModel: vscode['harry-cz.ai.direct-openai-large-model'] ?? 'gpt-5.4',
    directGeminiSmallModel: vscode['harry-cz.ai.direct-gemini-small-model'] ?? 'gemini-2.5-flash-lite',
    directGeminiLargeModel: vscode['harry-cz.ai.direct-gemini-large-model'] ?? 'gemini-2.5-flash',
  };
}

// ── AI providers ──────────────────────────────────────────────────

const CLAUDE_CLI = '__claude_cli__';
const CLAUDE_CLI_SONNET = '__claude_cli_sonnet__';
const OPENAI_DIRECT = '__openai_direct__';
const GEMINI_DIRECT = '__gemini_direct__';
const MANUAL_VALUE = '__manual__';
const LARGE_DIFF_CHARS = 4000;
const SPECIAL_MODELS = new Set([CLAUDE_CLI, CLAUDE_CLI_SONNET, OPENAI_DIRECT, GEMINI_DIRECT, MANUAL_VALUE]);

const COMMIT_JSON_SCHEMA = {
  type: 'object',
  properties: {
    type: { type: 'string' },
    scope: { type: 'string' },
    subject: { type: 'string' },
    body: { type: 'string' },
    breaking: { type: 'string' },
  },
  required: ['type', 'scope', 'subject', 'body', 'breaking'],
  additionalProperties: false,
};

function isOpenRouterModel(model) {
  return !!model && !SPECIAL_MODELS.has(model);
}

function fallbackModelForAvailableProviders({ hasOpenRouterKey, hasOpenAiKey, hasGeminiKey }) {
  if (hasOpenRouterKey) return DEFAULT_MODEL;
  if (hasOpenAiKey) return OPENAI_DIRECT;
  if (hasGeminiKey) return GEMINI_DIRECT;
  return CLAUDE_CLI;
}

function requiredEnvVarForModel(model) {
  if (model === OPENAI_DIRECT) return 'OPENAI_API_KEY';
  if (model === GEMINI_DIRECT) return 'GEMINI_API_KEY';
  if (isOpenRouterModel(model)) return 'OPENROUTER_API_KEY';
  return undefined;
}

function resolveWorkingModel(model, keyState) {
  if (!model) {
    return fallbackModelForAvailableProviders(keyState);
  }

  if (model === OPENAI_DIRECT && !keyState.hasOpenAiKey) {
    return fallbackModelForAvailableProviders(keyState);
  }
  if (model === GEMINI_DIRECT && !keyState.hasGeminiKey) {
    return fallbackModelForAvailableProviders(keyState);
  }
  if (isOpenRouterModel(model) && !keyState.hasOpenRouterKey) {
    return fallbackModelForAvailableProviders(keyState);
  }

  return model;
}

// Returns: 'yes' | 'no' | 'unknown'
async function checkOpenRouterCredits() {
  const res = await fetch('https://openrouter.ai/api/v1/auth/key', {
    headers: { Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}` },
  });
  if (!res.ok) return 'no';
  const data = await res.json();
  const { usage, limit } = data.data || {};
  if (limit != null) return usage < limit ? 'yes' : 'no';
  // No key-level limit — if usage > 0, credits have worked before
  return usage > 0 ? 'yes' : 'unknown';
}

function callClaudeCli(prompt, cliModel = 'haiku') {
  return execFileSync('claude', ['-p', '--model', cliModel], {
    input: prompt,
    encoding: 'utf-8',
    timeout: 60000,
    maxBuffer: MAX_BUFFER,
  });
}

async function fetchModels() {
  const res = await fetch('https://openrouter.ai/api/v1/models', {
    headers: { Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}` },
  });
  if (!res.ok) {
    throw new Error(`OpenRouter models API returned ${res.status}`);
  }
  const data = await res.json();
  const all = data.data.filter(m => m.id && m.name);

  const favSet = new Set(FAVORITE_MODELS);
  const pinned = [];
  for (const id of FAVORITE_MODELS) {
    const found = all.find(m => m.id === id);
    if (found) pinned.push({ value: found.id, name: found.name });
  }

  const rest = all
    .filter(m => !favSet.has(m.id))
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(m => ({ value: m.id, name: m.name }));

  return { pinned, rest };
}

async function callOpenRouter(prompt, model) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.3,
      response_format: {
        type: 'json_schema',
        json_schema: {
          name: 'commit_message',
          strict: true,
          schema: COMMIT_JSON_SCHEMA,
        },
      },
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`OpenRouter API error (${response.status}): ${err.slice(0, 200)}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

async function callOpenAiDirect(prompt, model) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not set. Configure it before using OpenAI direct mode.');
  }
  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      input: prompt,
      text: {
        format: {
          type: 'json_schema',
          name: 'commit_message',
          schema: COMMIT_JSON_SCHEMA,
          strict: true,
        },
      },
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`OpenAI API error (${response.status}): ${err.slice(0, 200)}`);
  }

  const data = await response.json();
  if (!data.output_text) {
    throw new Error('OpenAI API returned no structured output text');
  }

  return data.output_text;
}

async function callGeminiDirect(prompt, model) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set. Configure it before using Gemini direct mode.');
  }
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': apiKey,
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: 'application/json',
        responseJsonSchema: COMMIT_JSON_SCHEMA,
      },
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Gemini API error (${response.status}): ${err.slice(0, 200)}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts
    ?.map(part => part.text || '')
    .join('')
    .trim();

  if (!text) {
    const blockReason = data.promptFeedback?.blockReason;
    if (blockReason) {
      throw new Error(`Gemini API returned no content (${blockReason})`);
    }
    throw new Error('Gemini API returned no structured output text');
  }

  return text;
}

// ── Diff helpers ──────────────────────────────────────────────────

function getStagedStat() {
  return execFileSync('git', ['diff', '--cached', '--stat'], { encoding: 'utf-8', maxBuffer: MAX_BUFFER }).trim();
}

function getStagedDiff() {
  let diff = execFileSync('git', ['diff', '--cached'], { encoding: 'utf-8', maxBuffer: MAX_BUFFER });

  if (diff.length > MAX_DIFF_CHARS) {
    const lineEnd = diff.lastIndexOf('\n', MAX_DIFF_CHARS);
    diff = diff.slice(0, lineEnd > 0 ? lineEnd : MAX_DIFF_CHARS) + '\n\n... (diff truncated for brevity)';
  }

  return diff;
}

// ── AI suggestion ─────────────────────────────────────────────────

function buildPrompt(stat, diff, motivation) {
  return `You are a commit message generator for Armstrong Edge, a React component library by Rocketmakers.

Analyze the staged diff below and suggest a conventional commit message.

RULES:
- Types: ${VALID_TYPES.join(', ')}
- Scopes: ${SCOPE_NAMES.join(', ')}  (pick one if relevant, or leave empty string — scope is optional)
- Subject: imperative mood, no trailing period, max 200 chars
- Body: 1-3 sentences explaining WHY the change was made and what it affects. Always provide a body — we want detailed changelogs. Leave empty string ONLY for truly trivial changes (typos, formatting)
- "feat" = wholly new feature, "fix" = bug fix, "refactor" = restructure without behaviour change, "chore" = config/deps/tooling
- "WIP" = work in progress (only if the diff looks clearly incomplete)

DIFF STATS:
${stat}

DIFF:
${diff}
${motivation ? `\nAUTHOR'S MOTIVATION / CONTEXT:\n${motivation}\n` : ''}
BREAKING CHANGES:
- If the diff contains breaking changes (dropped support, removed APIs, changed peerDependencies major versions, renamed public exports, changed component prop signatures), set "breaking" to a short description of what breaks
- semantic-release uses "BREAKING CHANGE:" in the commit footer to trigger a major version bump, so getting this right matters

Respond with ONLY valid JSON matching the schema: {type, scope, subject, body, breaking}`;
}

async function getAiSuggestion(stat, diff, motivation, model, settings) {
  const prompt = buildPrompt(stat, diff, motivation);
  let result;
  const largeDiff = diff.length > (settings?.largeDiffThreshold || LARGE_DIFF_CHARS);

  if (model === CLAUDE_CLI || model === CLAUDE_CLI_SONNET) {
    const cliModel = model === CLAUDE_CLI_SONNET
      ? (settings?.largeCliModel || 'sonnet')
      : (settings?.smallCliModel || 'haiku');
    result = callClaudeCli(prompt, cliModel);
  } else if (model === OPENAI_DIRECT) {
    const directModel = largeDiff
      ? (settings?.directOpenAiLargeModel || 'gpt-5.4')
      : (settings?.directOpenAiSmallModel || 'gpt-5.4-mini');
    result = await callOpenAiDirect(prompt, directModel);
  } else if (model === GEMINI_DIRECT) {
    const directModel = largeDiff
      ? (settings?.directGeminiLargeModel || 'gemini-2.5-flash')
      : (settings?.directGeminiSmallModel || 'gemini-2.5-flash-lite');
    result = await callGeminiDirect(prompt, directModel);
  } else {
    result = await callOpenRouter(prompt, model);
  }

  const parsed = parseJsonResponse(result);

  if (!VALID_TYPES.includes(parsed.type)) {
    console.log(`\n  Warning: AI suggested unknown type "${parsed.type}", defaulting to "${DEFAULT_TYPE}"`);
    parsed.type = DEFAULT_TYPE;
  }

  return parsed;
}

// ── Utilities ─────────────────────────────────────────────────────

function parseJsonResponse(text) {
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('Could not parse AI response: ' + text.slice(0, 200));
    return JSON.parse(match[0]); // let it throw naturally if still invalid
  }
}

function capitalize(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
}

function formatScope(scope) {
  return scope ? `(${scope})` : '';
}

const CONTROLS_ACCEPT = ' Enter = accept | Tab = edit | Ctrl+C = abort ';

function wrapLine(line, width) {
  if (!line) return [''];
  if (width <= 0) return [line];

  const wrapped = [];
  const paragraphs = line.split('\n');

  paragraphs.forEach(paragraph => {
    if (!paragraph) {
      wrapped.push('');
      return;
    }

    const words = paragraph.split(/(\s+)/).filter(Boolean);
    let current = '';

    words.forEach(word => {
      if (/^\s+$/.test(word)) {
        if (current && current.length + 1 <= width && !current.endsWith(' ')) current += ' ';
        return;
      }

      if (!current) {
        if (word.length <= width) {
          current = word;
          return;
        }

        for (let i = 0; i < word.length; i += width) {
          wrapped.push(word.slice(i, i + width));
        }
        return;
      }

      if ((current + word).length <= width) {
        current += word;
        return;
      }

      wrapped.push(current.trimEnd());
      if (word.length <= width) {
        current = word;
        return;
      }

      for (let i = 0; i < word.length; i += width) {
        const chunk = word.slice(i, i + width);
        if (chunk.length === width || i + width < word.length) {
          wrapped.push(chunk);
        } else {
          current = chunk;
        }
      }
    });

    if (current) wrapped.push(current.trimEnd());
  });

  return wrapped.length ? wrapped : [''];
}

// Box with optional controls slicing through the bottom border
function printBox(lines, controlsLabel) {
  const terminalWidth = process.stdout.columns || 80;
  const chromeWidth = 6;
  const maxContentWidth = Math.max(20, Math.min(MAX_BOX_WIDTH, terminalWidth - chromeWidth));
  const wrappedLines = lines.flatMap(line => wrapLine(line, maxContentWidth));
  const minWidth = controlsLabel ? Math.min(maxContentWidth, controlsLabel.length + 2) : Math.min(maxContentWidth, 60);
  const maxLen = Math.max(wrappedLines.reduce((max, l) => Math.max(max, l.length), 0), minWidth);
  const pad = s => s + ' '.repeat(Math.max(0, maxLen - s.length));
  console.log(`  ┌─${'─'.repeat(maxLen)}─┐`);
  wrappedLines.forEach(l => console.log(`  │ ${pad(l)} │`));
  if (controlsLabel) {
    const label = controlsLabel.length > maxLen ? controlsLabel.slice(0, maxLen) : controlsLabel;
    const inner = `─${label}─`;
    console.log(`  └${inner}${'─'.repeat(Math.max(0, maxLen - label.length - 2))}┘`);
  } else {
    console.log(`  └─${'─'.repeat(maxLen)}─┘`);
  }
}

function buildProviderSetupLines() {
  return [
    'AI provider setup options:',
    '',
    'OpenRouter:',
    '  1. Get a key: openrouter.ai/settings/keys',
    '  2. Add to ~/.zshrc: export OPENROUTER_API_KEY="your-key"',
    '',
    'OpenAI:',
    '  1. Get a key: platform.openai.com/api-keys',
    '  2. Add to ~/.zshrc: export OPENAI_API_KEY="your-key"',
    '',
    'Gemini:',
    '  1. Get a key: ai.google.dev/gemini-api/docs/api-key',
    '  2. Add to ~/.zshrc: export GEMINI_API_KEY="your-key"',
    '',
    'Then run: source ~/.zshrc',
    '',
    'Claude CLI also works without these env vars if `claude` is installed.',
  ];
}

function pushChoiceGroup(choices, label, items) {
  if (!items.length) return;
  if (choices.length) {
    choices.push({ type: 'separator', line: '────────────────' });
  }
  choices.push({ type: 'separator', line: `── ${label} ──` });
  choices.push(...items);
}

function findFirstSelectableChoiceIndex(choices) {
  return choices.findIndex(choice => choice && choice.type !== 'separator');
}


function waitForKey() {
  return new Promise((resolve, reject) => {
    const { stdin } = process;
    if (!stdin.isTTY) {
      reject(new Error('stdin is not a TTY — cannot read keypress'));
      return;
    }
    const wasRaw = stdin.isRaw ?? false;
    stdin.setRawMode(true);
    stdin.resume();
    stdin.once('data', data => {
      stdin.setRawMode(wasRaw);
      stdin.pause();
      resolve(data[0]);
    });
  });
}

async function waitForValidKey() {
  while (true) {
    const key = await waitForKey();
    if (key === KEY_ESC) return KEY_CTRL_C;
    if (key === KEY_CTRL_C || key === KEY_ENTER || key === KEY_TAB) return key;
    // Ignore non-ASCII keys (arrow keys, function keys, etc.)
  }
}

function buildCommitMessage({ type, scope, subject, body, breaking }) {
  let msg = `${type}${formatScope(scope)}: ${capitalize(subject)}`;
  if (body) msg += `\n\n${body}`;
  if (breaking) msg += `\n\nBREAKING CHANGE: ${breaking}`;
  return msg;
}

async function manualCommit(cz, commit, { type, scope, subject, body, breaking }) {
  const breakingAllowed = czCustomizable.allowBreakingChanges.includes(type);

  const prompts = [
    {
      type: 'input',
      name: 'subject',
      message: 'Write a short, imperative tense description of the change (max 200 chars):',
      default: subject || undefined,
      validate: input => input.trim() ? true : 'Subject is required.',
    },
    {
      type: 'input',
      name: 'body',
      message: 'Provide a longer description of the change (press Enter to skip):',
      default: body || undefined,
    },
  ];

  if (breakingAllowed) {
    prompts.push({
      type: 'input',
      name: 'breaking',
      message: 'List any BREAKING CHANGES (press Enter to skip):',
      default: breaking || undefined,
    });
  }


  const answers = await cz.prompt(prompts);

  const finalSubject = answers.subject.trim();
  if (!finalSubject) {
    console.log('\n  Empty subject. Aborting commit.\n');
    return;
  }

  commit(buildCommitMessage({
    type,
    scope,
    subject: finalSubject,
    body: (answers.body || '').trim(),
    breaking: (answers.breaking || '').trim(),
  }));
}

// ── Main prompter ─────────────────────────────────────────────────

module.exports = {
  async prompter(cz, commit) {
    const stat = getStagedStat();
    if (!stat) {
      console.log('\n  No staged changes. Run `git add` first.\n');
      return;
    }

    // Headless mode — caller provides commit parts via env vars
    if (process.env.CZ_AI_HEADLESS === '1') {
      const type = process.env.CZ_AI_TYPE || '';
      const scope = process.env.CZ_AI_SCOPE || '';
      const subject = process.env.CZ_AI_SUBJECT || '';
      const body = process.env.CZ_AI_BODY || '';
      const breaking = process.env.CZ_AI_BREAKING || '';

      if (!subject) {
        // No subject provided — print conventions as JSON so the consumer AI
        // can learn the rules, then call again with the right env vars.
        console.log(JSON.stringify({
          instructions: [
            'Set the following env vars and re-run with CZ_AI_HEADLESS=1:',
            '  CZ_AI_TYPE     — commit type (required)',
            '  CZ_AI_SCOPE    — scope (optional, empty string if none)',
            '  CZ_AI_SUBJECT  — subject line (required, imperative mood, no trailing period, max 200 chars)',
            '  CZ_AI_BODY     — body (optional, 1-3 sentences explaining WHY the change was made)',
            '  CZ_AI_BREAKING — breaking change description (optional, empty string if none)',
          ],
          validTypes: VALID_TYPES,
          typeDescriptions: {
            feat: 'wholly new feature',
            fix: 'bug fix',
            refactor: 'restructure without behaviour change',
            chore: 'config/deps/tooling',
            WIP: 'work in progress (only if the diff looks clearly incomplete)',
          },
          validScopes: SCOPE_NAMES,
          breakingChangeGuidance: [
            'Set CZ_AI_BREAKING if the diff contains: dropped support, removed APIs,',
            'changed peerDependencies major versions, renamed public exports,',
            'or changed component prop signatures.',
            'semantic-release uses "BREAKING CHANGE:" in the commit footer to trigger a major version bump.',
          ],
          stagedFiles: stat,
        }, null, 2));
        return;
      }

      // Strict validation — reject rather than silently fix
      const errors = [];

      if (!type) {
        errors.push(`CZ_AI_TYPE is required. Valid types: ${VALID_TYPES.join(', ')}`);
      } else if (!VALID_TYPES.includes(type)) {
        errors.push(`CZ_AI_TYPE "${type}" is not valid. Valid types: ${VALID_TYPES.join(', ')}`);
      }

      if (scope && !SCOPE_NAMES.includes(scope)) {
        errors.push(`CZ_AI_SCOPE "${scope}" is not valid. Valid scopes: ${SCOPE_NAMES.join(', ')} (or empty string for no scope)`);
      }

      if (subject.length > 200) {
        errors.push(`CZ_AI_SUBJECT exceeds 200 chars (got ${subject.length}). Shorten it.`);
      }

      if (subject.endsWith('.')) {
        errors.push('CZ_AI_SUBJECT must not end with a period.');
      }

      if (subject.includes('\n')) {
        errors.push('CZ_AI_SUBJECT must be a single line. Use CZ_AI_BODY for additional detail.');
      }

      if (errors.length) {
        console.log(JSON.stringify({ errors }, null, 2));
        return;
      }

      const msg = buildCommitMessage({ type, scope, subject, body, breaking });
      console.log(`\n  Headless mode — committing: ${type}${formatScope(scope)}: ${subject}\n`);
      commit(msg);
      return;
    }

    const hasOpenRouterKey = !!process.env.OPENROUTER_API_KEY;
    const hasOpenAiKey = !!process.env.OPENAI_API_KEY;
    const hasGeminiKey = !!process.env.GEMINI_API_KEY;
    const hasAnyApiKey = hasOpenRouterKey || hasOpenAiKey || hasGeminiKey;
    const keyState = { hasOpenRouterKey, hasOpenAiKey, hasGeminiKey };
    const resolved = resolveSettings();
    const baseSettings = hasAnyApiKey ? resolved : { ...resolved, model: CLAUDE_CLI, skipModel: false };
    const configuredModel = baseSettings.model;
    const workingModel = resolveWorkingModel(configuredModel, keyState);
    const settings = workingModel === configuredModel ? baseSettings : { ...baseSettings, model: workingModel };

    if (workingModel !== configuredModel) {
      const requiredVar = requiredEnvVarForModel(configuredModel);
      if (requiredVar) {
        console.log(
          `\n  Configured model "${configuredModel}" requires ${requiredVar}, which is not set. Falling back to "${workingModel}".\n`
        );
      }
    }

    // Check OpenRouter credits before bothering with the model list
    // creditStatus: 'yes' = confirmed, 'unknown' = key works but never used, 'no' = none
    let creditStatus = 'no';
    if (hasOpenRouterKey) {
      process.stdout.write('\n  Checking OpenRouter credits...');
      try {
        creditStatus = await checkOpenRouterCredits();
        if (creditStatus === 'yes') {
          console.log(' OK.\n');
        } else if (creditStatus === 'no') {
          console.log(' no credits.\n');
          printBox([
            'No OpenRouter credits remaining.',
            'Purchase credits: https://openrouter.ai/settings/credits',
          ]);
          console.log('');
        } else {
          console.log(' uncertain (key never used).\n');
        }
      } catch {
        console.log(' failed to check.\n');
      }
    }

    // Fetch models whenever we have an API key (can't fetch without one)
    const modelsPromise = hasOpenRouterKey && !settings.skipModel ? fetchModels() : null;

    // Model selection
    let model = settings.model;
    if (!settings.skipModel) {
      const choices = [];
      let defaultIdx = 0;
      const directApiChoices = [];
      const localCliChoices = [
        { value: CLAUDE_CLI, name: 'Claude CLI (auto-selects Haiku or Sonnet)' },
      ];
      const manualChoices = [{ value: MANUAL_VALUE, name: 'Manual (no AI)' }];

      if (hasOpenAiKey) {
        directApiChoices.push({ value: OPENAI_DIRECT, name: `OpenAI API (${settings.directOpenAiSmallModel} / ${settings.directOpenAiLargeModel})` });
      }
      if (hasGeminiKey) {
        directApiChoices.push({ value: GEMINI_DIRECT, name: `Gemini API (${settings.directGeminiSmallModel} / ${settings.directGeminiLargeModel})` });
      }

      if (modelsPromise) {
        process.stdout.write('  Fetching available models...');
        try {
          const { pinned, rest } = await modelsPromise;
          console.log(` found ${pinned.length + rest.length} models.\n`);

          if (creditStatus === 'yes') {
            const openRouterChoices = [...pinned, ...rest];
            pushChoiceGroup(choices, 'Direct APIs', directApiChoices);
            pushChoiceGroup(choices, 'OpenRouter', openRouterChoices);
            pushChoiceGroup(choices, 'Local CLI', localCliChoices);
            pushChoiceGroup(choices, 'Manual', manualChoices);

            defaultIdx = choices.findIndex(m => m.value === model);
            if (defaultIdx === -1 && model && model !== CLAUDE_CLI) {
              choices.unshift({ value: model, name: `${model} (configured)` });
              defaultIdx = 0;
            } else {
              defaultIdx = defaultIdx === -1 ? findFirstSelectableChoiceIndex(choices) : defaultIdx;
            }
          } else {
            pushChoiceGroup(choices, 'Local CLI', localCliChoices);
            pushChoiceGroup(choices, 'Direct APIs', directApiChoices);
            if (pinned.length || rest.length) {
              pushChoiceGroup(choices, 'OpenRouter (may require credits)', [...pinned, ...rest]);
            }
            pushChoiceGroup(choices, 'Manual', manualChoices);
            defaultIdx = findFirstSelectableChoiceIndex(choices);
          }
        } catch (err) {
          console.log(` failed (${err.message})\n`);
          pushChoiceGroup(choices, 'Local CLI', localCliChoices);
          pushChoiceGroup(choices, 'Direct APIs', directApiChoices);
          pushChoiceGroup(choices, 'Manual', manualChoices);
          defaultIdx = choices.findIndex(c => c.value === CLAUDE_CLI);
          if (defaultIdx === -1) {
            defaultIdx = findFirstSelectableChoiceIndex(choices);
          }
        }
      } else {
        if (!hasAnyApiKey) {
          console.log('');
          printBox(buildProviderSetupLines());
          console.log('');
        }
        pushChoiceGroup(choices, 'Local CLI', localCliChoices);
        pushChoiceGroup(choices, 'Direct APIs', directApiChoices);
        pushChoiceGroup(choices, 'Manual', manualChoices);
        defaultIdx = choices.findIndex(c => c.value === model);
        if (defaultIdx === -1) {
          defaultIdx = choices.findIndex(c => c.value === CLAUDE_CLI);
        }
        if (defaultIdx === -1) {
          defaultIdx = findFirstSelectableChoiceIndex(choices);
        }
      }


      const answer = await cz.prompt([
        {
          type: 'list',
          name: 'model',
          message: 'Model:',
          choices,
          default: defaultIdx,
        },
      ]);
      model = answer.model;
    } else {
      console.log(`\n  Model: ${model} (from settings)\n`);
    }

    if (model === MANUAL_VALUE) {
      return promptForCommit(cz, commit, null);
    }

    // AI path — ask for motivation then generate
    const diff = getStagedDiff();
    const largeDiff = diff.length > settings.largeDiffThreshold;

    // Auto-size: use bigger model for large diffs
    if (model === CLAUDE_CLI && largeDiff) {
      model = CLAUDE_CLI_SONNET;
    } else if (model === settings.smallModel && largeDiff) {
      model = settings.largeModel;
    }

  
    const { motivation } = await cz.prompt([
      {
        type: 'input',
        name: 'motivation',
        message: 'Motivation / context for these changes (optional, press Enter to skip):',
      },
    ]);

    let ai = null;
    const modelLabel =
      model === CLAUDE_CLI ? 'Claude CLI (Haiku)' :
      model === CLAUDE_CLI_SONNET ? 'Claude CLI (Sonnet)' :
      model === OPENAI_DIRECT ? `OpenAI API (${largeDiff ? settings.directOpenAiLargeModel : settings.directOpenAiSmallModel})` :
      model === GEMINI_DIRECT ? `Gemini API (${largeDiff ? settings.directGeminiLargeModel : settings.directGeminiSmallModel})` :
      model;
    process.stdout.write(`  Generating AI suggestion (${modelLabel})...`);
    try {
      ai = await getAiSuggestion(stat, diff, motivation, model, settings);
      console.log(` done!\n\n  Suggestion: ${ai.type}${formatScope(ai.scope)}: ${ai.subject}\n`);
    } catch (err) {
      console.log(` failed.\n\n  ⚠ ${err.message}\n`);

      // Offer escalated fallback — if haiku failed offer sonnet, otherwise offer haiku
      const cliFallback = model === CLAUDE_CLI
        ? { value: CLAUDE_CLI_SONNET, name: 'Claude Sonnet CLI (larger model)' }
        : { value: CLAUDE_CLI, name: 'Claude CLI (auto-selects Haiku or Sonnet)' };

      const fallbackChoices = [];
      pushChoiceGroup(fallbackChoices, 'Local CLI', [cliFallback]);
      if (hasOpenAiKey && model !== OPENAI_DIRECT) {
        pushChoiceGroup(fallbackChoices, 'Direct APIs', [
          { value: OPENAI_DIRECT, name: `OpenAI API (${settings.directOpenAiSmallModel} / ${settings.directOpenAiLargeModel})` },
        ]);
      }
      if (hasGeminiKey && model !== GEMINI_DIRECT) {
        const hasDirectApiGroup = fallbackChoices.some(choice => choice.type === 'separator' && choice.line === '── Direct APIs ──');
        if (hasDirectApiGroup) {
          fallbackChoices.push({ value: GEMINI_DIRECT, name: `Gemini API (${settings.directGeminiSmallModel} / ${settings.directGeminiLargeModel})` });
        } else {
          pushChoiceGroup(fallbackChoices, 'Direct APIs', [
            { value: GEMINI_DIRECT, name: `Gemini API (${settings.directGeminiSmallModel} / ${settings.directGeminiLargeModel})` },
          ]);
        }
      }
      pushChoiceGroup(fallbackChoices, 'Manual', [{ value: MANUAL_VALUE, name: 'Manual (no AI)' }]);


      const { fallback } = await cz.prompt([
        {
          type: 'list',
          name: 'fallback',
          message: 'AI generation failed. How would you like to proceed?',
          choices: fallbackChoices,
        },
      ]);

      if (fallback !== MANUAL_VALUE) {
        const fallbackLabel =
          fallback === CLAUDE_CLI_SONNET ? 'Claude Sonnet CLI' :
          fallback === CLAUDE_CLI ? 'Claude CLI' :
          fallback === OPENAI_DIRECT ? 'OpenAI API' :
          fallback === GEMINI_DIRECT ? 'Gemini API' :
          fallback;
        process.stdout.write(`  Generating AI suggestion via ${fallbackLabel}...`);
        try {
          ai = await getAiSuggestion(stat, diff, motivation, fallback, settings);
          console.log(` done!\n\n  Suggestion: ${ai.type}${formatScope(ai.scope)}: ${ai.subject}\n`);
        } catch (cliErr) {
          console.log(` failed.\n\n  ⚠ ${cliErr.message}\n  Falling back to manual commit entry.\n`);
        }
      }
    }

    return promptForCommit(cz, commit, ai);
  },
};

// ── Commit flow ───────────────────────────────────────────────────

async function promptForCommit(cz, commit, ai) {
  const defaultTypeIdx = ai ? Math.max(TYPES.findIndex(t => t.value === ai.type), 0) : 0;
  const scopeChoices = SCOPES.map(s => s.name || NO_SCOPE);
  const defaultScopeIdx = ai ? Math.max(scopeChoices.findIndex(s => s === ai.scope), 0) : 0;


  const answers = await cz.prompt([
    {
      type: 'list',
      name: 'type',
      message: "Select the type of change that you're committing:",
      choices: TYPES,
      default: defaultTypeIdx,
    },
    {
      type: 'list',
      name: 'scope',
      message: 'What is the scope of this change (e.g. component or file name):',
      choices: scopeChoices,
      default: defaultScopeIdx,
    },
  ]);

  const scope = answers.scope === NO_SCOPE ? '' : answers.scope;
  const msg = { type: answers.type, scope, subject: '', body: '', breaking: '' };

  if (!ai) {
    return manualCommit(cz, commit, msg);
  }

  msg.subject = capitalize(ai.subject);
  msg.body = ai.body || '';
  msg.breaking = ai.breaking || '';

  const scopePart = formatScope(scope);
  const boxLines = [`${msg.type}${scopePart}: ${msg.subject}`];
  if (msg.body) {
    boxLines.push('', ...msg.body.split('\n'));
  }
  if (msg.breaking) {
    boxLines.push('', `BREAKING CHANGE: ${msg.breaking}`);
  }
  console.log('');
  printBox(boxLines, CONTROLS_ACCEPT);
  console.log('');

  const key = await waitForValidKey();

  if (key === KEY_CTRL_C) {
    console.log('\n  Aborted.\n');
    return;
  }

  if (key === KEY_TAB) {
    return manualCommit(cz, commit, msg);
  }

  commit(buildCommitMessage(msg));
}
