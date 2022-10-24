import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts()],
  css: {
    modules: {
      localsConvention: "dashesOnly",
    },
  },
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@rocketmakers/armstrong-dev",
      formats: ["es", "cjs"],
      fileName: (format) => `[name]${format === "cjs" ? "" : `.${format}`}.js`,
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ["react", "react-dom"],
      treeshake: true,
      output: {
        preserveModules: true,
        inlineDynamicImports: false,
        dir: "dist",
      },
    },
  },
});
