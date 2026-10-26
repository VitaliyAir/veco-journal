import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base = repo name, because the site is served from https://vitaliyair.github.io/veco-journal/
export default defineConfig({
  plugins: [react()],
  base: '/veco-journal/',
});
