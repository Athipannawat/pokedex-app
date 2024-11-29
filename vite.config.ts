import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { BASE_GITHUB_URL } from './src/config';

// https://vitejs.dev/config/
/*
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: [{ find: '@', replacement: '/src' }],
  },
})
*/

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
  }

  if (command !== 'serve') {
    config.base = BASE_GITHUB_URL
  }

  return config
})