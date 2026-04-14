"use strict";

const test = require("node:test");
const assert = require("node:assert/strict");

const {
  buildCommitMessage,
  buildHeadlessInstructions,
  normalizeAiSuggestion,
  parseJsonResponse,
  validateHeadlessCommitParts,
} = require("./commit");

test("buildCommitMessage omits BREAKING CHANGE for types that do not support it", () => {
  const message = buildCommitMessage({
    type: "docs",
    scope: "components",
    subject: "refresh button docs",
    body: "Explains the prop behaviour more clearly.",
    breaking: "Removes the legacy prop table.",
  });

  assert.equal(
    message,
    "docs(components): Refresh button docs\n\nExplains the prop behaviour more clearly.",
  );
});

test("normalizeAiSuggestion defaults unknown types to the fallback commit type", () => {
  const result = normalizeAiSuggestion({
    type: "perf",
    scope: "hooks",
    subject: "speed up memo checks",
    body: "Keeps the changelog bucketed into supported commit types.",
    breaking: "",
  });

  assert.equal(result.wasTypeNormalized, true);
  assert.equal(result.suggestion.type, "chore");
  assert.equal(result.suggestion.scope, "hooks");
});

test("parseJsonResponse extracts JSON from wrapped model output", () => {
  const parsed = parseJsonResponse(
    '```json\n{"type":"fix","scope":"","subject":"patch release flow","body":"","breaking":""}\n```',
  );

  assert.deepEqual(parsed, {
    type: "fix",
    scope: "",
    subject: "patch release flow",
    body: "",
    breaking: "",
  });
});

test("validateHeadlessCommitParts returns actionable validation errors", () => {
  const errors = validateHeadlessCommitParts({
    type: "docs",
    scope: "",
    subject: "Bad subject.",
    body: "",
    breaking: "Removes the old docs section.",
  });

  assert.deepEqual(errors, [
    "CZ_AI_SUBJECT must not end with a period.",
    "CZ_AI_BREAKING is only valid for commit types that allow breaking changes.",
  ]);
});

test("buildHeadlessInstructions derives type guidance from commit config", () => {
  const instructions = buildHeadlessInstructions("M  scripts/cz-ai/shared.js");

  assert.equal(instructions.typeDescriptions.docs, "documentation-only change");
  assert.equal(
    instructions.typeDescriptions.style,
    "formatting or non-functional style change",
  );
  assert.equal(
    instructions.typeDescriptions.revert,
    "revert a previous commit",
  );
});
