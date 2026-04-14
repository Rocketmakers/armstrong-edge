"use strict";

const config = require("../../.commit-config");

function normalizeScope(scope) {
  if (typeof scope === "string") {
    return { name: scope };
  }

  return scope && typeof scope.name === "string"
    ? { name: scope.name }
    : { name: "" };
}

function normalizeType(type, breakingTypes = new Set()) {
  const value =
    typeof type?.value === "string" && type.value.trim()
      ? type.value.trim()
      : typeof type?.name === "string" && type.name.trim()
        ? type.name.trim()
        : typeof type === "string"
          ? type.trim()
          : "";

  if (!value) {
    return null;
  }

  const description =
    typeof type?.description === "string" && type.description.trim()
      ? type.description.trim()
      : value;
  const aiHint =
    typeof type?.aiHint === "string" && type.aiHint.trim()
      ? type.aiHint.trim()
      : description.charAt(0).toLowerCase() + description.slice(1);

  return {
    name: value,
    aiHint,
    allowBreakingChanges:
      type?.allowBreakingChanges === true || breakingTypes.has(value),
  };
}

function buildFallbackCommitizenType(type) {
  return {
    value: type.name,
    name: `${type.name} : ${type.name}`,
  };
}

function resolveCommitConfig() {
  if (config.commitConfig && Array.isArray(config.commitConfig.types)) {
    return {
      allowCustomScopes: config.commitConfig.allowCustomScopes === true,
      defaultType:
        typeof config.commitConfig.defaultType === "string"
          ? config.commitConfig.defaultType.trim()
          : "",
      scopes: Array.isArray(config.commitConfig.scopes)
        ? config.commitConfig.scopes.map(normalizeScope)
        : [],
      subjectLimit:
        Number.isInteger(config.commitConfig.subjectLimit) &&
        config.commitConfig.subjectLimit > 0
          ? config.commitConfig.subjectLimit
          : 200,
      types: config.commitConfig.types
        .map((type) => normalizeType(type))
        .filter(Boolean),
    };
  }

  const { czCustomizable = {} } = config;
  const breakingTypes = new Set(czCustomizable.allowBreakingChanges || []);

  return {
    allowCustomScopes: czCustomizable.allowCustomScopes === true,
    defaultType: "",
    scopes: Array.isArray(czCustomizable.scopes)
      ? czCustomizable.scopes.map(normalizeScope)
      : [],
    subjectLimit: czCustomizable.subjectLimit || 200,
    types: Array.isArray(czCustomizable.types)
      ? czCustomizable.types
          .map((type) => normalizeType(type, breakingTypes))
          .filter(Boolean)
      : [],
  };
}

const COMMIT_CONFIG = resolveCommitConfig();
const { czCustomizable = {} } = config;
const TYPES = Array.isArray(czCustomizable.types)
  ? czCustomizable.types
  : COMMIT_CONFIG.types.map(buildFallbackCommitizenType);
const VALID_TYPES = COMMIT_CONFIG.types.map((type) => type.name);
const SCOPES = Array.isArray(czCustomizable.scopes)
  ? czCustomizable.scopes.map(normalizeScope)
  : COMMIT_CONFIG.scopes;
const SCOPE_NAMES = COMMIT_CONFIG.scopes
  .map((scope) => scope.name)
  .filter(Boolean);
const DEFAULT_TYPE = VALID_TYPES.includes(COMMIT_CONFIG.defaultType)
  ? COMMIT_CONFIG.defaultType
  : VALID_TYPES.includes("chore")
    ? "chore"
    : VALID_TYPES[0];
const SUBJECT_LIMIT = COMMIT_CONFIG.subjectLimit;
const MAX_BUFFER = 1024 * 1024 * 20;
const MAX_DIFF_CHARS = 12000;
const DEFAULT_LARGE_DIFF_THRESHOLD = 4000;
const ALLOW_CUSTOM_SCOPES = COMMIT_CONFIG.allowCustomScopes;
const BREAKING_CHANGE_TYPES = new Set(
  COMMIT_CONFIG.types
    .filter((type) => type.allowBreakingChanges)
    .map((type) => type.name),
);

const NO_SCOPE = "(none)";
const CUSTOM_SCOPE = "(custom)";

const MANUAL_VALUE = "__manual__";
const CLAUDE_CLI = "__claude_cli__";
const GEMINI_DIRECT = "__gemini__";
const OPENAI_DIRECT = "__openai__";
const OPENROUTER_DIRECT = "__openrouter__";
const PROVIDER_CLAUDE_CLI = "claude-cli";
const PROVIDER_GEMINI = "gemini";
const PROVIDER_OPENAI = "openai";
const PROVIDER_OPENROUTER = "openrouter";
const SUPPORTED_PROVIDERS = [
  PROVIDER_CLAUDE_CLI,
  PROVIDER_GEMINI,
  PROVIDER_OPENAI,
  PROVIDER_OPENROUTER,
];

const TYPE_GUIDANCE = Object.fromEntries(
  COMMIT_CONFIG.types.map((type) => [type.name, type.aiHint]),
);

const COMMIT_JSON_SCHEMA = {
  type: "object",
  properties: {
    type: { type: "string" },
    scope: { type: "string" },
    subject: { type: "string" },
    body: { type: "string" },
    breaking: { type: "string" },
  },
  required: ["type", "scope", "subject", "body", "breaking"],
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
  GEMINI_DIRECT,
  MANUAL_VALUE,
  MAX_BUFFER,
  MAX_DIFF_CHARS,
  NO_SCOPE,
  OPENAI_DIRECT,
  OPENROUTER_DIRECT,
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
  COMMIT_CONFIG,
  czCustomizable,
  supportsBreakingChanges,
};
