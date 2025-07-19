import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import reactPlugin from 'eslint-plugin-react'
import importPlugin from 'eslint-plugin-import'

export default await tseslint.config([
  {
    name: 'root-config',
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: ['./backend/tsconfig.json', './webapp/tsconfig.json'],
      },
    },
    plugins: {
      react: reactPlugin,
      import: importPlugin,
    },
    rules: {
      // Base
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommendedTypeChecked[0].rules,

      // Style
      'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
      curly: ['error', 'all'],
      'import/order': [
        'error',
        {
          alphabetize: { order: 'asc', caseInsensitive: false },
          'newlines-between': 'always',
        },
      ],

      // TS-specific
      '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as' }],

      // React overrides
      'react/react-in-jsx-scope': 'off', // React 17+
      'react/jsx-uses-react': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [js.configs.recommended, ...tseslint.configs.recommendedTypeChecked, prettier],
  },

  // Optional override: Vite config or Node-specific files
  {
    files: ['webapp/vite.config.ts'],
    languageOptions: {
      parserOptions: {
        project: './webapp/tsconfig.node.json',
      },
    },
  },
])
