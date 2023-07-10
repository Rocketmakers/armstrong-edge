import { join, resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts()],
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@rocketmakers/armstrong-dev',
      formats: ['es', 'cjs'],
      fileName: format => `[name]${format === 'cjs' ? '' : `.${format}`}.js`,
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['react', 'react-dom'],
      treeshake: true,
      output: {
        preserveModules: true,
        preserveModulesRoot: join(__dirname, '/src'),
        inlineDynamicImports: false,
        dir: 'dist',
      },
    },
  },
});
