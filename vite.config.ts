import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
import tailwindcss from '@tailwindcss/vite'
import { codeInspectorPlugin } from 'code-inspector-plugin'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    codeInspectorPlugin({
      bundler: 'vite',
    }),
  ],
})
