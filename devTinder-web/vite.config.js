import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";

export default defineConfig({
  base : "/devtinder/",
  plugins: [
    tailwindcss(), 
    react(), 
    qiankun(
      "devtinder", 
      // { useDevMode: true }
    )
    ],
  server: { 
    // port: 5173, 
    port: 3003, 
    cors: true 
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
});
