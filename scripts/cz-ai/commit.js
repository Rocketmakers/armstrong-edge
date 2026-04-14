'use strict';

const { execFileSync } = require('child_process');

const {
  ALLOW_CUSTOM_SCOPES,
  DEFAULT_TYPE,
  MAX_BUFFER,
  MAX_DIFF_CHARS,
  SCOPE_NAMES,
  SUBJECT_LIMIT,
  TYPE_GUIDANCE,
  VALID_TYPES,
  supportsBreakingChanges,
} = require('./shared');

function getStagedStat() {
  return execFileSync('git', ['diff', '--cached', '--stat'], {
    encoding: 'utf-8',
    maxBuffer: MAX_BUFFER,
  }).trim();
}

function getStagedDiff() {
  let diff = execFileSync('git', ['diff', '--cached'], {
    encoding: 'utf-8',
    maxBuffer: MAX_BUFFER,
  });

  if (diff.length > MAX_DIFF_CHARS) {
    const lineEnd = diff.lastIndexOf('\n', MAX_DIFF_CHARS);
    diff = `${diff.slice(0, lineEnd > 0 ? lineEnd : MAX_DIFF_CHARS)}\n\n... (diff truncated for brevity)`;
  }

  return diff;
}

function buildPrompt(stat, diff, motivation) {
  const scopeRule = ALLOW_CUSTOM_SCOPES
    ? `- Preferred scopes: ${SCOPE_NAMES.join(', ')} (pick one if relevant, or use another short scope string if needed; scope is optional)`
    : `- Scopes: ${SCOPE_NAMES.join(', ')} (pick one if relevant, or leave empty string; scope is optional)`;

  const typeRule = Object.entries(TYPE_GUIDANCE)
    .map(([type, description]) => `- "${type}" = ${description}`)
    .join('\n');

  return `You are a commit message generator for Armstrong Edge, a React component library by Rocketmakers.

Analyze the staged diff below and suggest a conventional commit message.

RULES:
- Types: ${VALID_TYPES.join(', ')}
${scopeRule}
- Subject: imperative mood, no trailing period, max ${SUBJECT_LIMIT} chars
- Body: 1-3 sentences explaining WHY the change was made and what it affects. Always provide a body - we want detailed changelogs. Leave empty string ONLY for truly trivial changes (typos, formatting)
${typeRule}

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

function parseJsonResponse(text) {
  const raw = typeof text === 'string' ? text : String(text);

  try {
    return JSON.parse(raw);
  } catch {
    const match = raw.match(/\{[\s\S]*\}/);
    if (!match) {
      throw new Error(`Could not parse AI response: ${raw.slice(0, 200)}`);
    }
    return JSON.parse(match[0]);
  }
}

function capitalize(value) {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : value;
}

function formatScope(scope) {
  return scope ? `(${scope})` : '';
}

function normalizeCommitParts(parts) {
  return {
    type: typeof parts?.type === 'string' ? parts.type.trim() : '',
    scope: typeof parts?.scope === 'string' ? parts.scope.trim() : '',
    subject: typeof parts?.subject === 'string' ? parts.subject.trim() : '',
    body: typeof parts?.body === 'string' ? parts.body.trim() : '',
    breaking: typeof parts?.breaking === 'string' ? parts.breaking.trim() : '',
  };
}

function finalizeCommitParts(parts) {
  const normalized = normalizeCommitParts(parts);

  if (!supportsBreakingChanges(normalized.type)) {
    normalized.breaking = '';
  }

  if (!ALLOW_CUSTOM_SCOPES && normalized.scope && !SCOPE_NAMES.includes(normalized.scope)) {
    normalized.scope = '';
  }

  return normalized;
}

function normalizeAiSuggestion(parsed) {
  const suggestion = finalizeCommitParts(parsed);
  const wasTypeNormalized = !VALID_TYPES.includes(suggestion.type);

  if (wasTypeNormalized) {
    suggestion.type = DEFAULT_TYPE;
  }

  return {
    suggestion,
    wasTypeNormalized,
  };
}

function getSubjectValidationError(subject) {
  if (!subject) {
    return 'Subject is required.';
  }

  if (subject.length > SUBJECT_LIMIT) {
    return `Subject must be ${SUBJECT_LIMIT} characters or fewer.`;
  }

  if (subject.endsWith('.')) {
    return 'Subject must not end with a period.';
  }

  if (subject.includes('\n')) {
    return 'Subject must be a single line.';
  }

  return null;
}

function getScopeValidationError(scope) {
  if (!scope) {
    return null;
  }

  if (scope.includes('\n')) {
    return 'Scope must be a single line.';
  }

  if (!ALLOW_CUSTOM_SCOPES && !SCOPE_NAMES.includes(scope)) {
    return `CZ_AI_SCOPE "${scope}" is not valid. Valid scopes: ${SCOPE_NAMES.join(', ')} (or empty string for no scope)`;
  }

  return null;
}

function validateHeadlessCommitParts(parts) {
  const commit = normalizeCommitParts(parts);
  const errors = [];

  if (!commit.type) {
    errors.push(`CZ_AI_TYPE is required. Valid types: ${VALID_TYPES.join(', ')}`);
  } else if (!VALID_TYPES.includes(commit.type)) {
    errors.push(`CZ_AI_TYPE "${commit.type}" is not valid. Valid types: ${VALID_TYPES.join(', ')}`);
  }

  const scopeError = getScopeValidationError(commit.scope);
  if (scopeError) {
    errors.push(scopeError);
  }

  const subjectError = getSubjectValidationError(commit.subject);
  if (subjectError) {
    const subjectMessages = {
      'Subject is required.': 'CZ_AI_SUBJECT is required.',
      [`Subject must be ${SUBJECT_LIMIT} characters or fewer.`]: `CZ_AI_SUBJECT exceeds ${SUBJECT_LIMIT} chars (got ${commit.subject.length}). Shorten it.`,
      'Subject must not end with a period.': 'CZ_AI_SUBJECT must not end with a period.',
      'Subject must be a single line.': 'CZ_AI_SUBJECT must be a single line. Use CZ_AI_BODY for additional detail.',
    };

    errors.push(subjectMessages[subjectError] || subjectError);
  }

  if (commit.breaking && !supportsBreakingChanges(commit.type)) {
    errors.push('CZ_AI_BREAKING is only valid for commit types that allow breaking changes.');
  }

  return errors;
}

function buildHeadlessInstructions(stat) {
  return {
    instructions: [
      'Set the following env vars and re-run with CZ_AI_HEADLESS=1:',
      '  CZ_AI_TYPE     - commit type (required)',
      `  CZ_AI_SCOPE    - scope (${ALLOW_CUSTOM_SCOPES ? 'optional; custom scopes allowed' : 'optional; empty string if none'})`,
      `  CZ_AI_SUBJECT  - subject line (required, imperative mood, no trailing period, max ${SUBJECT_LIMIT} chars)`,
      '  CZ_AI_BODY     - body (optional, 1-3 sentences explaining WHY the change was made)',
      '  CZ_AI_BREAKING - breaking change description (optional, empty string if none)',
    ],
    validTypes: VALID_TYPES,
    typeDescriptions: TYPE_GUIDANCE,
    validScopes: SCOPE_NAMES,
    allowCustomScopes: ALLOW_CUSTOM_SCOPES,
    breakingChangeGuidance: [
      'Set CZ_AI_BREAKING if the diff contains: dropped support, removed APIs,',
      'changed peerDependencies major versions, renamed public exports,',
      'or changed component prop signatures.',
      'semantic-release uses "BREAKING CHANGE:" in the commit footer to trigger a major version bump.',
    ],
    stagedFiles: stat,
  };
}

function buildCommitMessage(parts) {
  const commit = finalizeCommitParts(parts);
  let message = `${commit.type}${formatScope(commit.scope)}: ${capitalize(commit.subject)}`;

  if (commit.body) {
    message += `\n\n${commit.body}`;
  }

  if (commit.breaking) {
    message += `\n\nBREAKING CHANGE: ${commit.breaking}`;
  }

  return message;
}

module.exports = {
  buildCommitMessage,
  buildHeadlessInstructions,
  buildPrompt,
  capitalize,
  finalizeCommitParts,
  formatScope,
  getScopeValidationError,
  getStagedDiff,
  getStagedStat,
  getSubjectValidationError,
  normalizeAiSuggestion,
  normalizeCommitParts,
  parseJsonResponse,
  validateHeadlessCommitParts,
};
