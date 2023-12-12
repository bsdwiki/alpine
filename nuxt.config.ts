export default defineNuxtConfig({
  // https://github.com/nuxt-themes/alpine
  extends: '@nuxt/ui-pro',

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
    '@nuxthq/studio',
    '@nuxt/ui'
  ]
})
