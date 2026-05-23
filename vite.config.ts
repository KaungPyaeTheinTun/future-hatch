import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite"; // <-- 1. Make sure this is imported

export default defineConfig({
  plugins: [
    tanstackStart(),
    nitro({
      preset: "vercel", // 👈 This is the missing piece! It tells Nitro to build for Vercel Serverless
    }),
    viteReact(),
  ],
});
