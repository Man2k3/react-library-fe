import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'fs';
import dotenv from 'dotenv';
// https://vite.dev/config/
dotenv.config();
const keyFile = process.env.VITE_SSL_KEY_FILE;
const certFile = process.env.VITE_SSL_CRT_FILE;

if (!keyFile || !certFile) {
  throw new Error('SSL key or certificate file is not defined in the environment variables');
}

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(keyFile), // Đọc key từ .env
      cert: fs.readFileSync(certFile) // Đọc cert từ .env
    },
    host: 'localhost',
    port: 5173
  }
});
