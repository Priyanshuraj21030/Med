import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        proxy: {
            '/breast': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/breast/, '')
            },
            '/diabetes-detection': {
                target: 'http://localhost:5001',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/diabetes-detection/, '')
            }
        }
    },
    resolve: {
        alias: {
            '@': '/src'
        }
    }
}) 