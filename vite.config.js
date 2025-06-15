import { resolve } from 'path';
import { defineConfig } from 'vite';
import imageminPlugin from 'vite-plugin-imagemin';

export default defineConfig(({ mode }) => {
  return {
    root: 'src',
    publicDir: '../public',
    build: {
      outDir: '../dist',
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/index.html'),
          about: resolve(__dirname, 'src/quienes.html'),
          services: resolve(__dirname, 'src/servicios.html'), // Changed from services.html to servicios.html
          blog: resolve(__dirname, 'src/blog.html'),
          blogDetail: resolve(__dirname, 'src/blog-detalle.html'),
        },
      },
      minify: mode === 'prod' ? 'terser' : false,
      sourcemap: mode === 'dev',
    },
    resolve: {
      alias: {
        '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
        '@': resolve(__dirname, 'src'),
        '@scss': resolve(__dirname, 'src/scss'),
        '@js': resolve(__dirname, 'src/js'),
        '@assets': resolve(__dirname, 'public/assets'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // Use resolve(__dirname, ...) to provide absolute paths
          additionalData: `
            @import "${resolve(__dirname, 'src/scss/abstracts/_variables.scss').replace(/\\/g, '/')}";
            @import "${resolve(__dirname, 'src/scss/abstracts/_mixins.scss').replace(/\\/g, '/')}";
          `
        },
      },
    },
    plugins: [
      imageminPlugin({
        gifsicle: { optimizationLevel: 7, interlaced: false },
        optipng: { optimizationLevel: 7 },
        mozjpeg: { quality: 80 },
        pngquant: { quality: [0.8, 0.9], speed: 4 },
        svgo: {
          plugins: [
            { name: 'removeViewBox' },
            { name: 'removeEmptyAttrs', active: false },
          ],
        },
      }),
    ],
    server: {
      port: 3000, // Optional: specify dev server port
      open: true, // Optional: open browser on server start
    },
  };
});