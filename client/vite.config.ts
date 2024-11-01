import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  base: "./", 
  server: {
    proxy: {
      '/': {
        target: 'https://sh1cc4n7-3000.brs.devtunnels.ms',
        changeOrigin: true,
        secure: false,
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, _req, _res) => {
            proxyReq.setHeader('Access-Control-Allow-Origin', '*');
            proxyReq.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, OPTIONS');
            proxyReq.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            proxyReq.setHeader('Access-Control-Allow-Credentials', 'true');
          });
        },
      },
    },
  },
});

