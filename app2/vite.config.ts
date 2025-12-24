import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from 'vite-plugin-qiankun';

export default defineConfig({
  base : "/florist/",
  plugins: [react(), qiankun("devtinder-web", { useDevMode: true })],
  server: { port: 3002, cors: true },
});
