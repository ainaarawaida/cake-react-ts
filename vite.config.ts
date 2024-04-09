import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { svelte } from '@sveltejs/vite-plugin-svelte'
import liveReload from 'vite-plugin-live-reload';
import path from 'path';


export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [
      react(),
      svelte(),
      liveReload([
        // // edit live reload paths according to your source code
        // // for example:
        // __dirname + '/(app|config|views)/**/*.php',
        // // using this for our example:
        // __dirname + '/../public/*.php',
      ]),
     
    ],

    // config
    root: 'src',
    base: mode === 'development' ? '/' : '/react/dist/',
    build: {
      // output dir for production build
      outDir: '../app/webroot/react/dist',
      emptyOutDir: true,
      // emit manifest so PHP can find the hashed files
      manifest: true,
      // our entry
      rollupOptions: {
        input: path.resolve(__dirname, 'src/main.tsx'),
      },
    },
    server: {
      // we need a strict port to match on PHP side
      // change freely, but update on PHP to match the same port
      // tip: choose a different port per project to run them at the same time
      strictPort: true,
      port: 5133,
    },
    // required for in-browser template compilation
    // https://vuejs.org/guide/scaling-up/tooling.html#note-on-in-browser-template-compilation
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@/public': path.resolve(__dirname, 'public'),
      },
    },
  });
};

