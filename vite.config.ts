import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        "./src/lang/*.json",
      ),
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.endsWith(".png") ||
            id.endsWith(".jpg") ||
            id.endsWith(".jpeg") ||
            id.endsWith(".gif") ||
            id.endsWith(".svg")
          ) {
            return `image_${id.slice(id.lastIndexOf("/") + 1).split(".")[0]}`;
          }
        },
      },
    },
  },
});
