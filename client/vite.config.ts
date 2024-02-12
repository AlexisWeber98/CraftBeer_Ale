// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  server: {
    // Agrega una configuración de proxy para manejar las solicitudes de archivos TypeScript
    proxy: {
      "/src/": {
        target: "https://craftbeershop.netlify.app/", // Cambia esto por la URL de tu servidor de desarrollo
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/src/, ""),
      },
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') }
    ]
  },
  base: '/craftbeer_Ale/', // Ajusta esto según la subcarpeta de tu dominio
});
