import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@ant-design/icons/lib/dist$": path.resolve(
        __dirname,
        "node_modules/@ant-design/icons/lib/dist/index.js"
      ),
    },
  },
});
