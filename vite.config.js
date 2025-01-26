// vite.config.js
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react-swc"; // Using Vite React plugin
import tailwindcss from "@tailwindcss/vite"; // Using Tailwind CSS plugin

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom", // Use jsdom for DOM-related tests
    globals: true, // Makes global variables like `describe`, `it`, `expect` available
    setupFiles: "./vitest_setup.js", // Include setup file to configure global test setups
    coverage: {
      reporter: ["text", "json", "html"], // Optional: Enable code coverage reporting
    },
  },
});
