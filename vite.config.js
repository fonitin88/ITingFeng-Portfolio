import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: '/ITingFeng-Portfolio/', // 這裡改成你的 repo 名稱

})