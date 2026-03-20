import {
    defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: process.env.VITE_BASE_URL || '/vowmoments/',
    plugins: [react()],
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks: undefined,
            },
        },
    },
    server: {
        historyApiFallback: true,
    },
    preview: {
        historyApiFallback: true,
    },
})