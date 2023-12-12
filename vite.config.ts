import { fileURLToPath, URL } from 'node:url'
import { defineConfig  } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default () => {
  return defineConfig({
    plugins: [
      vue(),
      vueJsx()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      proxy: {},
      port: 3001,
      open: false
    }
  });
};