import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite"; // <-- 1. Make sure this is imported

export default defineConfig({
  plugins: [
    tanstackStart(),
    nitro(), // <-- 2. Make sure this is called here
    viteReact(),
  ],
});
