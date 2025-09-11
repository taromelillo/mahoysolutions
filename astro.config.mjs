// @ts-check
import { defineConfig, envField } from "astro/config";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

import icon from "astro-icon";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://www.mahoysolutions.com",
  integrations: [sitemap(), icon()],

  vite: {
    plugins: [
      tailwindcss(),
      nodePolyfills({
        include: ["crypto", "stream", "util", "buffer"],
      }),
    ],
    ssr: {
      external: [
        "node:fs/promises",
        "events",
        "util",
        "node:url",
        "node:path",
        "vm",
        "url",
        "net",
        "dns",
        "crypto",
        "fs",
        "os",
        "child_process",
        "http",
        "https",
        "zlib",
        "stream",
        "path",
        "tls",
      ],
    },
  },

  adapter: cloudflare({ imageService: "cloudflare" }),
  env: {
    schema: {
      PHONE_NUMBER: envField.string({
        context: "server",
        access: "public",
      }),
      EMAIL_PORT: envField.string({
        context: "server",
        access: "secret",
      }),
      USER: envField.string({
        context: "server",
        access: "secret",
      }),
      PASSKEY: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },
});
