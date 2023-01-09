import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';

// https://astro.build/config

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    config: {
      applyBaseStyles: false,
    },
  }), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })]
});