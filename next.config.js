const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const linguiConfig = require("./lingui.config.js");

const { locales, sourceLocale } = linguiConfig;

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = {
  TrailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    };
  },
  experimental: { esmExternals: true },
  pwa: {
    dest: "public",
    runtimeCaching,
    disable: process.env.NODE_ENV === "development",
  },
  reactStrictMode: true,
  async redirects() {
    return [];
  },
  async rewrites() {
    return [
      {
        source: "/swap/:token*",
        destination: "/exchange/swap/:token*",
      },
    ];
  },
  i18n: {
    localeDetection: true,
    locales,
    defaultLocale: sourceLocale,
  },
};
