import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: resolve(__dirname, 'public'),
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      assets: resolve(__dirname, './public/assets'),
    },
  },
  server: {
    host: true,
  },
  clearScreen: false,
});
