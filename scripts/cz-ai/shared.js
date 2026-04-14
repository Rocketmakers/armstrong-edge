'use strict';

const config = require('../../.commit-config');

const { czCustomizable } = config;
const TYPES = czCustomizable.types;
const VALID_TYPES = TYPES.map(type => type.value);
const SCOPES = czCustomizable.scopes;
const SCOPE_NAMES = SCOPES.map(scope => scope.name).filter(Boolean);
const DEFAULT_TYPE = VALID_TYPES.includes('chore') ? 'chore' : VALID_TYPES[0];
const SUBJECT_LIMIT = czCustomizable.subjectLimit || 200;
const MAX_BUFFER = 1024 * 1024 * 20;
const MAX_DIFF_CHARS = 12000;
const DEFAULT_LARGE_DIFF_THRESHOLD = 4000;
const ALLOW_CUSTOM_SCOPES = czCustomizable.allowCustomScopes === true;
const BREAKING_CHANGE_TYPES = new Set(czCustomizable.allowBreakingChanges || []);

const KEY_CTRL_C = 0x03;
const KEY_ENTER = 0x0d;
const KEY_TAB = 0x09;
const KEY_ESC = 0x1b;
const NO_SCOPE = '(none)';
const CUSTOM_SCOPE = '(custom)';

const MANUAL_VALUE = '__manual__';
const CLAUDE_CLI = '__claude_cli__';
const GEMINI_DIRECT = '__gemini__';
const OPENAI_DIRECT = '__openai__';
const PROVIDER_CLAUDE_CLI = 'claude-cli';
const PROVIDER_GEMINI = 'gemini';
const PROVIDER_OPENAI = 'openai';
const PROVIDER_OPENROUTER = 'openrouter';
const SUPPORTED_PROVIDERS = [
  PROVIDER_CLAUDE_CLI,
  PROVIDER_GEMINI,
  PROVIDER_OPENAI,
  PROVIDER_OPENROUTER,
];

const FAVORITE_MODELS = [
  'google/gemini-2.5-flash-lite',
  'openai/gpt-5.4-nano',
  'openai/gpt-5.4-mini',
  'google/gemini-2.5-flash',
  'anthropic/claude-haiku-4.5',
];

const TYPE_GUIDANCE = {
  feat: 'wholly new feature',
  fix: 'bug fix',
  refactor: 'restructure without behaviour change',
  chore: 'config/deps/tooling',
  WIP: 'work in progress (only if the diff looks clearly incomplete)',
};

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

function supportsBreakingChanges(type) {
  return BREAKING_CHANGE_TYPES.has(type);
}

module.exports = {
  ALLOW_CUSTOM_SCOPES,
  CLAUDE_CLI,
  COMMIT_JSON_SCHEMA,
  CUSTOM_SCOPE,
  DEFAULT_LARGE_DIFF_THRESHOLD,
  DEFAULT_TYPE,
  FAVORITE_MODELS,
  GEMINI_DIRECT,
  KEY_CTRL_C,
  KEY_ENTER,
  KEY_ESC,
  KEY_TAB,
  MANUAL_VALUE,
  MAX_BUFFER,
  MAX_DIFF_CHARS,
  NO_SCOPE,
  OPENAI_DIRECT,
  PROVIDER_CLAUDE_CLI,
  PROVIDER_GEMINI,
  PROVIDER_OPENAI,
  PROVIDER_OPENROUTER,
  SCOPES,
  SCOPE_NAMES,
  SUBJECT_LIMIT,
  SUPPORTED_PROVIDERS,
  TYPES,
  TYPE_GUIDANCE,
  VALID_TYPES,
  czCustomizable,
  supportsBreakingChanges,
};
