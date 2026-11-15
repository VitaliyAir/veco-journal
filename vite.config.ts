import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base = repo name, because the site is served from https://vitaliyair.github.io/veco-journal/
export default defineConfig({
  plugins: [react()],
  base: '/veco-journal/',
  server: {
    // 5179 свободен; 5173/5175/5177 заняты Docker-контейнерами проекта vapps
    // (5177 оставляем VLinks). strictPort не включаем: если 5179 занят,
    // Vite сам возьмёт следующий свободный порт.
    port: 5179,
  },
});
