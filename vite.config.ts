import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: ["**/*.tsx", "**/*.ts"],
    }),
  ],
  server: { hmr: true },
  css: {
    devSourcemap: true,
    transformer: "postcss",
    preprocessorOptions: {
      scss: {
        includePaths: ["node_modules"],
      },
    },
  },
});
