import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const port = process.env.PORT ? Number(process.env.PORT) : 5173;

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: port,
        host: '0.0.0.0',
    },
});
