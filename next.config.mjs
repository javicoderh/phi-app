/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: ['www.unileverfoodsolutions.cl', 'www.creativefabrica.com', 'www.svgheart.com'],
  },
  // ... any other configurations
};

export default config;
