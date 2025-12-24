import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from 'vite-plugin-qiankun';

export default defineConfig({
  plugins: [react(), qiankun("app2", { useDevMode: true })],
  server: { port: 3002, cors: true },
});
