// @ts-check
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import path from 'node:path'

// https://astro.build/config
export default defineConfig({
  site: 'https://skdimka.github.io',
  integrations: [react()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    resolve: {
      alias: {
        '@/modules': path.resolve('./src/modules'),
        '@': path.resolve('./src'),
      },
    },
  },
})
