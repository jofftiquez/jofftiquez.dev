// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  imports: {
    autoImport: false,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-gtag',
    '@nuxtjs/sitemap',
  ],

  site: {
    url: 'https://jofftiquez.dev',
    name: 'Joff Tiquez',
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },

  gtag: {
    id: 'G-SDCBMR60FY',
  },

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
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: 'Personal website of Joff Tiquez - Web Developer, creator of Vue Stripe, and co-founder of OSSPH. Explore my projects, skills, and open source contributions.' },
        { name: 'author', content: 'Joff Tiquez' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Joff Tiquez' },
        { property: 'og:locale', content: 'en_US' },
        { name: 'twitter:site', content: '@jrtiquez' },
        { name: 'twitter:creator', content: '@jrtiquez' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        {
          rel: 'stylesheet',
          href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css',
          media: 'print',
          onload: "this.media='all'",
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Joff Tiquez',
            url: 'https://jofftiquez.dev',
            image: 'https://jofftiquez.dev/og-banner.png',
            jobTitle: 'Web Developer',
            worksFor: {
              '@type': 'Organization',
              name: 'OSSPH',
            },
            sameAs: [
              'https://github.com/jofftiquez',
              'https://twitter.com/jrtiquez',
              'https://linkedin.com/in/jofftiquez',
              'https://stackoverflow.com/users/2889614/jofftiquez',
            ],
          }),
        },
        {
          type: 'text/javascript',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js',
          defer: true,
        },
        {
          type: 'text/javascript',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js',
          defer: true,
        },
        {
          type: 'text/javascript',
          src: 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.net.min.js',
          defer: true,
        },
        {
          type: 'text/javascript',
          src: 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.fog.min.js',
          defer: true,
        },
        {
          type: 'text/javascript',
          src: 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.clouds.min.js',
          defer: true,
        },
        {
          type: 'text/javascript',
          src: 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.trunk.min.js',
          defer: true,
        },
        {
          type: 'text/javascript',
          src: 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js',
          defer: true,
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
