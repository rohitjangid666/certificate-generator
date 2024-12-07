import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   middlewareMode: true,
  //   setup: app => {
  //     app.use((req, res, next) => {
  //       res.setHeader(
  //         'Content-Security-Policy',
  //         "default-src 'self'; script-src 'self' 'unsafe-inline' https://trusted-scripts.example.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://your-image-source.com;"
  //       );
  //       next();
  //     });
  //   },
  // },
});
