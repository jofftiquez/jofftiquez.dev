// const LANG = 'en_US';
// const TYPE = 'website';
// const URL = 'https://hippocrades.com';
// const SITE_NAME = 'hippocrades.com';

// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  preset: 'node-server',

  imports: {
    autoImport: false,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-gtag',
  ],

  gtag: {
    id: 'G-SDCBMR60FY',
  },

  // nitro: {
  //   preset: 'firebase',
  // },

  srcDir: './src',

  runtimeConfig: {
    public: {
      yourEnv: process.env.YOUR_ENV,
    },
  },

  plugins: [
    {
      src: '@/plugins/aos',
      ssr: false,
      mode: 'client',
    },
  ],

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css',
          media: 'none',
          onload: "if(media!='all')media='all'",
        },
      ],
      // TODO: load script only when needed
      // randomize the effects in this level
      script: [
        {
          type: 'text/javascript',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js',
          onload: "if(media!='all')media='all'",
        },
        {
          type: 'text/javascript',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js',
          onload: "if(media!='all')media='all'",
        },
        {
          type: 'text/javascript',
          src: 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.net.min.js',
          onload: "if(media!='all')media='all'",
        },
        {
          type: 'text/javascript',
          src: 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.fog.min.js',
          onload: "if(media!='all')media='all'",
        },
        {
          type: 'text/javascript',
          src: 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.clouds.min.js',
          onload: "if(media!='all')media='all'",
        },
        {
          type: 'text/javascript',
          src: 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.trunk.min.js',
          onload: "if(media!='all')media='all'",
        },
        {
          type: 'text/javascript',
          src: 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js',
          onload: "if(media!='all')media='all'",
        },
      ],
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },

  headlessui: {
    prefix: 'Headless',
  },

  build: {
    extend (config, ctx) {
      config.resolve.symlinks = false;
    },
  },

  image: {
    dir: 'assets/images',
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
      '3xl': 1920,
    },
  },

  devtools: {
    enabled: true,
  },
});
