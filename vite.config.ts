import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

const dirname = import.meta.dirname;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(dirname, "./src"),
    },
  },
  base: "/luxury_presence_assessment/",
});
