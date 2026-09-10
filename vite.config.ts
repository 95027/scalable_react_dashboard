import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [tailwindcss(), react()],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_SERVER_BASE_URL,
          changeOrigin: true,
        },
      },
    },
  };
});
