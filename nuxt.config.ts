// https://nuxt.com/docs/api/configuration/nuxt-config
//const isLocalHost = process.env.NODE_ENV === 'development';
const isBuild = false; // use true when build to production

const buildApp = {
  buildAssetsDir : './ticket/_nuxt/' ,
  baseURL : './ticket',
  cdnURL : './ticket'
};

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: isBuild ? buildApp : {},
});
