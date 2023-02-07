// @ts-check

const path = require('path');

/**
 * @type {import('intpp-next-i18next').UserConfig}
 */
module.exports = {
  defaultNS: 'default',
  ns: ['default', 'menu'],
  debug: process.env.NODE_ENV === 'development',
  localePath: typeof window === 'undefined' ? path.resolve(__dirname, `public/locales`) : '/locales',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'uk']
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  react: { useSuspense: false },
}
