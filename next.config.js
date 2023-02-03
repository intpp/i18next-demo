console.log('process.env.VERCEL', process.env.VERCEL, typeof process.env.VERCEL);

if (process.env.VERCEL) {
  process.env.I18NEXT_DEFAULT_PATH_CONFIG = './next-i18next.config.js';
}

const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
}

module.exports = nextConfig
