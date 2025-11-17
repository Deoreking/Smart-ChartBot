import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // All requests starting with /api will be proxied
      '/api': {
        target: 'http://localhost:3001', // Your backend server
        changeOrigin: true, // Needed for virtual hosted sites
        secure: false,      // Set to false if your backend is not using HTTPS
      },
    },
  },
})
// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': 'http://localhost:3001'
//     }
//   }
// })


