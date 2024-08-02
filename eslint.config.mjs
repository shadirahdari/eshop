import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactCompiler from 'eslint-plugin-react-compiler';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const compat = new FlatCompat({
  baseDirectory: _dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      '**/dist/',
      '**/.eslintrc.cjs',
      '**/eslint.config.mjs',
      '**/node_modules/',
      '**/build/',
      '**/coverage/',
    ],
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint-config-prettier',
    'eslint-config-airbnb',
  ),
  {
    plugins: {
      'react-refresh': reactRefresh,
      'react-compiler': reactCompiler,
      'react-hooks': reactHooks,
      import: importPlugin,
      'jsx-a11y': jsxA11Y,
      react: react,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react-compiler/react-compiler': 'error',
      'import/no-extraneous-dependencies': ['error', {
        devDependencies: ['vite.config.js', 'vite.config.ts', '**/*.test.js', '**/*.spec.js']
      }],
    },
  },
];
