/// <reference types="vitest" />

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",
  },
  server: {
    host: "0.0.0.0",
    port: 3500,
  },
  base: 'https://bncstay.github.io',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
