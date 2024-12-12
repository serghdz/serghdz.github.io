import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://serghdz.github.io',

  base: '/serghdz.github.io',
  integrations: [tailwind()]
});