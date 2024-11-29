import { sync } from 'glob';
import path from 'path';
import { defineConfig } from 'vite';
import sdk from 'vite-plugin-sdk';

export default defineConfig({
  plugins: [sdk()],
  css: {
    modules: {
      localsConvention: 'dashesOnly',
    },
  },
  build: {
    emptyOutDir: false,
    rollupOptions: {
      input: sync(path.resolve(__dirname, 'src/**/*.ts')),
      output: {
        preserveModules: true,
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      },
      external: ['react', 'react-dom'],
    },
  },
});