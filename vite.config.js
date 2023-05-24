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
  define: {
    "process.env": {
      VITE_SERVICE: JSON.stringify(process.env.VITE_SERVICE),
      VITE_TEMPLATE: JSON.stringify(process.env.VITE_TEMPLATE),
      VITE_PUBLIC_KEY: JSON.stringify(process.env.VITE_PUBLIC_KEY),
    },
  },
});
