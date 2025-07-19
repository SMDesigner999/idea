import tseslint from 'typescript-eslint'
import js from '@eslint/js'
import prettier from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  prettier,

  {
    files: ['./webapp/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './webapp/tsconfig.app.json',
        tsconfigRootDir: new URL('.', import.meta.url),
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      curly: ['error', 'all'],
    },
  },

  {
    files: ['./backend/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './backend/tsconfig.json',
        tsconfigRootDir: new URL('.', import.meta.url),
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      curly: ['error', 'all'],
    },
  },
]
