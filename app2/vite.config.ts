import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from 'vite-plugin-qiankun';

export default defineConfig({
  base: "/app2/",
  plugins: [
    react(),
    qiankun(
      "app2",
      // { useDevMode: true }
    )
  ],
  server: { port: 3002, cors: true },
  build: {
    outDir: 'dist',
    assetsDir: "assets",
    sourcemap: false
  }
});
