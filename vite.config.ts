import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // Force-enable Nitro for self-hosted deploys (e.g. Vercel).
  // Inside Lovable's sandbox the Cloudflare target is forced internally;
  // on Vercel, NITRO_PRESET=vercel (set in vercel.json) takes over.
  nitro: true,
});
