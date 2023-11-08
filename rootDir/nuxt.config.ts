// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@vite-pwa/nuxt"], // https://vite-pwa-org.netlify.app/frameworks/nuxt
  pwa: {
    /* your pwa options */
  },
  generate: {
    routes: ["/"],
    // TODO https://vite-pwa-org.netlify.app/frameworks/nuxt#prompt-for-update-and-offline-ready
  },
});
