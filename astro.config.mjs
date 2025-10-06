// @ts-check
import { defineConfig, envField } from "astro/config";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://www.mahoysolutions.com",
  integrations: [sitemap(), icon()],

  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ["node:fs/promises", "node:path", "node:url", "node:crypto"],
    },
  },

  adapter: cloudflare({ imageService: "cloudflare" }),
  env: {
    schema: {
      PHONE_NUMBER: envField.string({
        context: "server",
        access: "public",
      }),
    },
  },
});
