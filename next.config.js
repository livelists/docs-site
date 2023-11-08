require('dotenv').config();
const { i18n } = require('./next-i18next.config');

const publicRuntimeConfig = {
  appEnv: process.env.APP_ENV,
  openExchangeAppID: process.env.OPEN_EXCHANGE_APP_ID
};


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

module.exports = {
  ...nextConfig,
  publicRuntimeConfig,
};
