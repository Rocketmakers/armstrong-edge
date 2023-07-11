import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts()],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@rocketmakers/armstrong-dev',
      formats: ['es', 'cjs'],
      fileName: format => `[name]${format === 'cjs' ? '' : `.${format}`}.js`,
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['react', 'react-dom', 'date-fns', 'zod'],
      treeshake: true,
      output: {
        dir: 'dist',
      },
    },
  },
});
