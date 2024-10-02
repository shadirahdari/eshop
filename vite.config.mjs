import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  server: {
    proxy: {
      "/api": "https://e-shop-backend-ag4c.onrender.com",
    }
  },
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.js', './src/!**/!*.jsx'],
      exclude: [],
    }),
  ],
});
