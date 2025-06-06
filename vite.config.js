import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic'
    }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'My Vite PWA App',
        short_name: 'VitePWA',
        description: 'A Vite + React Progressive Web App',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'pwa.avif',
            sizes: '192x192',
            type: 'image/avif'
          },
          {
            src: 'pwa.avif',
            sizes: '512x512',
            type: 'image/avif'
          }
        ]
      }
    })
  ]
});
