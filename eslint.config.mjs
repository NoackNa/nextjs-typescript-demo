import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths'
import prettierPlugin from 'eslint-plugin-prettier'
import checkFile from 'eslint-plugin-check-file'
import tsEslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import prettierConfig from 'eslint-config-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  ...tsEslint.configs.recommended,
  prettier,
  prettierConfig,

  {
    plugins: {
      prettier: prettierPlugin,
      'check-file': checkFile,
      'no-relative-import-paths': noRelativeImportPaths,
    },
    rules: {
      'no-relative-import-paths/no-relative-import-paths': ['error', { prefix: '@', allowSameFolder: true }],
      'no-console': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'prettier/prettier': 'error',
      'react-hooks/exhaustive-deps': 'error',
      'react/jsx-key': 'warn',
      'react/no-array-index-key': 'warn',
      'no-nested-ternary': 'warn',
    },
  },
]

export default eslintConfig
