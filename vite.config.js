import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable code splitting for better caching and faster loads
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // Separate React libs for better caching
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'react-vendor'
            }
            // Three.js separately (if used)
            if (id.includes('three')) {
              return 'three-vendor'
            }
            // All other vendors
            return 'vendor'
          }
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Use esbuild for minification (faster and no extra deps needed)
    minify: 'esbuild',
    // Source maps disabled for production
    sourcemap: false,
    // CSS code splitting
    cssCodeSplit: true,
  },
  // Enable compression and optimization
  server: {
    compress: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})
