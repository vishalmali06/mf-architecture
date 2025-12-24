import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [tailwindcss(), react(), qiankun("devTinder", { useDevMode: true })],
  server: { port: 5173, cors: true },
});
