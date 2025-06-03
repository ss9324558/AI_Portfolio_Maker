import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import * as tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import promisePlugin from "eslint-plugin-promise";
import sonarjsPlugin from "eslint-plugin-sonarjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends(
    "next/core-web-vitals",
    "next",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ),

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,

  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
      globals: {
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        fetch: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        setInterval: "readonly",
        clearInterval: "readonly",
        React: "readonly",
        URLSearchParams: "readonly",
      },
    },
    plugins: {
      react: reactPlugin,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
      prettier: prettierPlugin,
      promise: promisePlugin,
      sonarjs: sonarjsPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react/jsx-uses-vars": "error",
      "react-hooks/exhaustive-deps": "warn",
      "prettier/prettier": ["error"],
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal"],
          alphabetize: { order: "asc", caseInsensitive: true },
          "newlines-between": "always",
        },
      ],
      "import/no-unresolved": "error",
      "import/no-duplicates": "error",
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: "default",
          format: ["camelCase", "PascalCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
      ],
      /**
       * ✅ Code Quality (SonarJS)
       */
      "sonarjs/cognitive-complexity": ["error", 15],
      "sonarjs/no-duplicate-string": ["error", { threshold: 5 }],
      "sonarjs/no-identical-functions": "error",
      "sonarjs/no-nested-template-literals": "warn",

      /**
       * ✅ Promise Handling
       */
      "promise/always-return": "warn",
      "promise/no-return-wrap": "error",
      "promise/param-names": "error",
      "promise/catch-or-return": "warn",
      "promise/no-new-statics": "error",
      "promise/no-return-in-finally": "error",

      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "prefer-const": "error",
      "no-var": "error",
      "no-duplicate-imports": "error",
      "no-multi-spaces": "warn",
      "no-unreachable": "error",
      "no-unused-expressions": ["warn", { allowShortCircuit: true }],
    },
  },
  {
    ignores: ["dist/", "node_modules/", "public/", "build/"],
  },
];
