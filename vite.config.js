import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about/index.html'),
        career: resolve(__dirname, 'src/career/index.html'),
        contact: resolve(__dirname, 'src/contact/index.html'),
        works: resolve(__dirname, 'src/works/index.html'),
        news: resolve(__dirname, 'src/news/index.html'),
        newsAiService: resolve(__dirname, 'src/news/ai-service/index.html'),
        newsRealEstate: resolve(__dirname, 'src/news/real-estate/index.html'),
        newsLinePackage: resolve(__dirname, 'src/news/line-package/index.html'),
        newsMedia: resolve(__dirname, 'src/news/media/index.html'),
        newsDxPackage: resolve(__dirname, 'src/news/dx-package/index.html'),
        serviceIndex: resolve(__dirname, 'src/service/index.html'),
        serviceDev: resolve(__dirname, 'src/service/dev/index.html'),
        serviceAi: resolve(__dirname, 'src/service/ai/index.html'),
        serviceLine: resolve(__dirname, 'src/service/line/index.html'),
        serviceSys: resolve(__dirname, 'src/service/sys/index.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
