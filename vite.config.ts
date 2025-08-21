import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000
  },
  css: {
    devSourcemap: true
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('antd')) return 'vendor-antd';
            if (id.includes('react')) return 'vendor-react';
            return 'vendor';
          }

          if (id.includes('/src/components/')) {
            return 'components';
          }

          if (id.includes('/src/utils/')) {
            return 'utils';
          }

          if (id.includes('/src/hooks/')) {
            return 'hooks';
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    minify: 'esbuild',
    cssCodeSplit: true,
  },
  resolve: {
    alias: [
      { find: '~', replacement: path.resolve(__dirname, 'src') },
    ]
  }
})
