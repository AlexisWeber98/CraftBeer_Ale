import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

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
});
