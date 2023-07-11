export default defineNuxtConfig({
  ssr: true,
  components: true,

  modules: ['@nuxtjs/i18n'],

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'English',
      },
      {
        code: 'ja',
        iso: 'ja-JP',
        name: '日本語',
      },
    ],
    defaultLocale: 'en',
    strategy: 'prefix',
    baseUrl:
      'https://nuxtstarter9w7cb2-25wk--3000--e809191e.local-corp.webcontainer.io',
    detectBrowserLanguage: {
      useCookie: true,
      cookieSecure: true,
      fallbackLocale: 'en',
      redirectOn: 'no prefix',
    },
  },
});
