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
      'dist/',
      'eslint.config.mjs',
      'postcss.config.mjs',
      'prettier.config.mjs',
      'tailwind.config.mjs',
      'commitlint.config.cjs',
      'vite.config.mjs',
      'node_modules/',
      'coverage/',
    ],
  },
  ...compat.extends(
    'eslint:recommended',
    'eslint-config-standard',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint-config-prettier',

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
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add extensions based on your project
        },
      },
      react: {
        version: 'detect',
      },
    },
    files: ['src/**/*.{js,jsx}'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react-compiler/react-compiler': 'error',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['vite.config.mjs', '**/*.test.js', '**/*.spec.js'],
        },
      ],
    },
  },
];
