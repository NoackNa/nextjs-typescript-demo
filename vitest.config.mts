import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ['src/**/*.unit.spec.*', 'src/**/*.ui-unit.spec.*'],
    exclude: ['**/*.snap'],
    environmentMatchGlobs: [['src/**/*.ui-unit.spec.*', 'jsdom']],
    coverage: {
      include: ['src/*'],
      provider: 'v8',
    },
    environment: 'node',
    setupFiles: './vitest-setup.ts',
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
