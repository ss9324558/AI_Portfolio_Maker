import js from '@eslint/js';
import * as tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import promisePlugin from 'eslint-plugin-promise';
import nPlugin from 'eslint-plugin-n';
import securityPlugin from 'eslint-plugin-security';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import eslintCommentsPlugin from 'eslint-plugin-eslint-comments';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
      },
      globals: {
        __dirname: 'readonly',
        process: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        console: 'readonly',
        Buffer: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        setImmediate: 'readonly',
        clearImmediate: 'readonly',
        global: 'readonly',
      },
    },
    plugins: {
      import: importPlugin,
      promise: promisePlugin,
      n: nPlugin,
      security: securityPlugin,
      'eslint-comments': eslintCommentsPlugin,
      'unused-imports': unusedImportsPlugin,
    },
    rules: {
      'unused-imports/no-unused-imports': 'error',
      'node/no-unsupported-features/es-syntax': 'off',
      'node/no-unpublished-import': 'off',
      'node/no-missing-import': 'off',
      'node/no-extraneous-import': 'off',
      /**
       * ✅ Import Rules
       */
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-unresolved': 'error',
      'import/no-duplicates': 'error',
      'import/newline-after-import': 'error',
      'import/no-cycle': ['warn', { maxDepth: 1 }],
      /**
       * ✅ Promise Handling
       */
      'promise/always-return': 'warn',
      'promise/no-return-wrap': 'error',
      'promise/param-names': 'error',
      'promise/catch-or-return': 'warn',

      /**
       * ✅ Security Rules
       */
      'security/detect-object-injection': 'warn',
      'security/detect-non-literal-fs-filename': 'warn',
      'security/detect-child-process': 'error',
      /**
       * ✅ ESLint Comments
       */
      'eslint-comments/no-unused-disable': 'warn',

      /**
       * ✅ Code Quality
       */
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
      'no-debugger': 'error',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'prefer-const': 'error',
      'no-var': 'error',
      'no-duplicate-imports': 'error',
      'no-multi-spaces': 'warn',
      'no-unreachable': 'error',
      'no-unused-expressions': ['warn', { allowShortCircuit: true }],
    },
  },
  // Ignore Patterns
  {
    ignores: ['node_modules/', 'dist/', 'coverage/'],
  },
];
