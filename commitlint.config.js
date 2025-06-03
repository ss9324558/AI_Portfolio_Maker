export default {
    extends: ["@commitlint/config-conventional"],
    rules: {
      "type-enum": [
        2,
        "always",
        [
          "feat",
          "feature",
          "fix",
          "docs",
          "style",
          "refactor",
          "test",
          "chore",
          "revert",
        ],
      ],
      "subject-case": [
        1,
        "always",
        ["sentence-case", "lower-case", "start-case"],
      ],
      "subject-max-length": [1, "always", 200],
      "scope-empty": [0],
      "scope-case": [0],
      "header-max-length": [1, "always", 200],
    },
  };