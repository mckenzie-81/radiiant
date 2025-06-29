
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  // base: process.env.VITE_BASE_PATH || "/radiiant", 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    build: {
      rollupOptions: {
        external: ['wave-gradient'], // tell Vite not to bundle it
      },
    },
  },

}));
