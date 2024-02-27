// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                dir: 'dist',
                // output file name as index.js
                entryFileNames: 'assets/index.js',
            }
        }
    }
});
