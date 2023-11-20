/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
images: {
  remotePatterns: [
    { hostname: 'www.unileverfoodsolutions.cl' },
    { hostname: 'www.creativefabrica.com' },
    {hostname: 'www.svgheart.com' },
  ],
},
reactStrictMode: true,
}


export default config;
