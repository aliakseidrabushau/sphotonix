import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const githubPages = mode === 'gh-pages'
  return {
    base: githubPages ? '/sphotonix/' : './',
    plugins: [react()],
  }
})
