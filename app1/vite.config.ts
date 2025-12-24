import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from 'vite-plugin-qiankun';

export default defineConfig({
  base: "/app1/",
  plugins: [react(), qiankun("app1", { useDevMode: false })],
  server: { port: 3001, cors: true },
  build: {
    outDir: 'dist',
    assetsDir: "assets",
    sourcemap: false
  }
});
