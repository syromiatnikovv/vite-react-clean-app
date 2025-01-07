import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig(({ mode }) => {
  const checkerPlugin = checker({
    overlay: false,
    eslint: {
      lintCommand: 'eslint .',
      useFlatConfig: true,
    },
    typescript: {
      tsconfigPath: './tsconfig.app.json',
    },
  });

  return {
    server: {
      open: true,
    },
    plugins: [react(), mode !== 'no-checks' && checkerPlugin].filter(Boolean),
  };
});
