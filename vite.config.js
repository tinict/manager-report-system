import { defineConfig, loadEnv } from 'vite';
import tailwindcss from 'tailwindcss';
import react from "@vitejs/plugin-react-swc";
import path from 'path';
import { fileURLToPath } from 'url';
import { VitePWA } from 'vite-plugin-pwa';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd());
const PORT = env.VITE_PUBLIC_PORT_WEB_APP || 8081;
const HOST = env.VITE_PUBLIC_LINK_LOCAL_IPV4 || 'localhost';

export default defineConfig({
  server: {
    port: 8080,
    hot: true
  },
  preview: {
    port: PORT,
    https: false,
    host: HOST,
    strictPort: true,
  },
  plugins: [
    tailwindcss(),
    react(),
    VitePWA({
      includeAssets: ['images/*'],
      manifest: {
        name: "Bệnh viện Trung Ương",
        short_name: "BVTW - Bệnh viện Trung Ương",
        description: "Ứng dụng khám bệnh viện Trung Ương",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#FFFFFF",
        icons: [
          {
            "src": "/images/logo_bvtw_hue.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/images/logo_bvtw_hue.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest}"],
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    }
  }
});