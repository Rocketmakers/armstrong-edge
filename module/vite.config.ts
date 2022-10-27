import { defineConfig } from "vite";
import { resolve, join } from "path";
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
      external: ["react", "react-dom", "react-select"],
      treeshake: true,
      output: {
        preserveModules: true,
        preserveModulesRoot: join(__dirname, "/src"),
        inlineDynamicImports: false,
        dir: "dist",
      },
    },
  },
});
