import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import postcssCascadeLayers from "@csstools/postcss-cascade-layers";
import postcssImport from "postcss-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssImport(),
        postcssCascadeLayers({
          onImportLayerRule: "warn",
          onConditionalRulesChangingLayerOrder: false,
          onRevertLayerKeyword: false,
        }),
      ],
    },
  },
  build: {
    minify: false,
    cssCodeSplit: true,
  },
  resolve: {
    alias: [
      { find: "~@rocketmakers", replacement: "./node_modules/@rocketmakers" },
    ],
  },
});
