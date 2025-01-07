import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig({
  server: {
    open: true,
  },
  plugins: [
    react(),
    checker({
      overlay: false,
      eslint: {
        lintCommand: 'eslint .',
        useFlatConfig: true,
      },
      typescript: {
        tsconfigPath: './tsconfig.app.json',
      },
    }),
  ],
});
