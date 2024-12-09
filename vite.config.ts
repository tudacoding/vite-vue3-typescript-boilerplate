import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // Alias cho thư mục src
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)), // Alias cho thư mục src
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ), // Alias cụ thể hơn
    },
  },
});
