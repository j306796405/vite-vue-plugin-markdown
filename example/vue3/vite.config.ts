import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { markdownPlugin } from 'vite-plugin-markdown';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), markdownPlugin()]
})
