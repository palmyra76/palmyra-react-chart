import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import path, { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'


export default defineConfig({
  plugins: [react()],  
  build: {    
    rollupOptions: {      
      input: glob.sync(path.resolve(__dirname, "index.html"))
    }
  }
})
