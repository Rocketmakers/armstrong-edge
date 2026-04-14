/**
 * Single source of truth for commitizen and cz-ai configuration.
 * Matches Armstrong's existing conventional commit conventions.
 */
const types = [
  {
    name: "feat",
    description: "A new feature",
    aiHint: "wholly new feature",
    changelogHeading: "Features",
    allowBreakingChanges: true,
  },
  {
    name: "fix",
    description: "A bug fix",
    aiHint: "bug fix",
    changelogHeading: "Bug Fixes",
    allowBreakingChanges: true,
  },
  {
    name: "refactor",
    description: "A code change that neither fixes a bug nor adds a feature",
    aiHint: "restructure without behaviour change",
    changelogHeading: "Code Refactoring",
    allowBreakingChanges: true,
  },
  {
    name: "chore",
    description:
      "Changes to the build process, tooling, or auxiliary libraries",
    aiHint: "config, dependency, or tooling change",
    changelogHeading: "Other Changes",
    allowBreakingChanges: true,
  },
  {
    name: "revert",
    description: "Revert a previous commit",
    aiHint: "revert a previous commit",
    changelogHeading: "Reverts",
    allowBreakingChanges: true,
  },
  {
    name: "docs",
    description: "Documentation only changes",
    aiHint: "documentation-only change",
    changelogHeading: "",
    allowBreakingChanges: false,
  },
  {
    name: "style",
    description:
      "Changes that do not affect the meaning of the code (white-space, formatting, etc)",
    aiHint: "formatting or non-functional style change",
    changelogHeading: "",
    allowBreakingChanges: false,
  },
  {
    name: "WIP",
    description: "Work in progress",
    aiHint: "work in progress (only if the diff looks clearly incomplete)",
    changelogHeading: "",
    allowBreakingChanges: false,
  },
];

const commitConfig = {
  defaultType: "chore",
  allowCustomScopes: true,
  subjectLimit: 200,
  types,
  scopes: [
    "",
    "form",
    "hooks",
    "components",
    "types",
    "config",
    "deps",
    "release",
  ],
};

const longestTypeName = types.reduce(
  (longest, t) => Math.max(t.name.length, longest),
  0,
);

function buildCommitizenTypeConfig(type, nameIndentSize) {
  const { name, description, changelogHeading } = type;
  const spaces = " ".repeat(nameIndentSize - name.length);
  const notInChangelogMsg = changelogHeading ? "" : "[not in changelog] ";
  return {
    value: name,
    name: `${name}${spaces} : ${notInChangelogMsg}${description}`,
  };
}

function toScopeChoice(scope) {
  return typeof scope === "string" ? { name: scope } : scope;
}

const czCustomizable = {
  types: [...commitConfig.types]
    .sort((a, b) => {
      const ac = !!a.changelogHeading;
      const bc = !!b.changelogHeading;
      return ac === bc ? 0 : ac ? -1 : 1;
    })
    .map((t) => buildCommitizenTypeConfig(t, longestTypeName)),

  allowCustomScopes: commitConfig.allowCustomScopes,
  allowBreakingChanges: commitConfig.types
    .filter((t) => t.allowBreakingChanges)
    .map((t) => t.name),
  subjectLimit: commitConfig.subjectLimit,

  scopes: commitConfig.scopes.map(toScopeChoice),
};

module.exports = { commitConfig, czCustomizable };
