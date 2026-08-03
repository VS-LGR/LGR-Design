const { LEGACY_REDIRECTS } = require("./src/lib/siteArchitecture.redirects.js");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return LEGACY_REDIRECTS;
  },
};

module.exports = nextConfig;
