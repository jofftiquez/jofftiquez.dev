// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  imports: {
    autoImport: true,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-gtag',
    '@nuxtjs/sitemap',
    '@nuxt/content',
  ],

  site: {
    url: 'https://jofftiquez.dev',
    name: 'Joff Tiquez',
  },

  sitemap: {
    urls: async () => {
      // This is a simple approach - in production the content will be crawled
      return ['/blogs/hello-world'];
    },
  },

  hooks: {
    async 'content:file:beforeInsert'(document) {
      // Auto-generate reading time if not set
      if (document._extension === 'md' && !document.readingTime) {
        const wordsPerMinute = 200;
        const textContent = JSON.stringify(document.body);
        const words = textContent.split(/\s+/).length;
        document.readingTime = Math.ceil(words / wordsPerMinute);
      }
    },
  },

  content: {
    highlight: {
      theme: 'dracula-soft',
      langs: ['javascript', 'typescript', 'vue', 'html', 'css', 'json', 'bash', 'shell', 'python', 'java', 'php', 'sql'],
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
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
            '@graph': [
              {
                '@type': 'Person',
                '@id': 'https://jofftiquez.dev/#person',
                name: 'Joff Tiquez',
                alternateName: ['jofftiquez', 'Jofferson Tiquez'],
                url: 'https://jofftiquez.dev',
                image: 'https://jofftiquez.dev/images/joff-tiquez.jpg',
                description: 'Software engineer, startup CTO and open source advocate from Manila, Philippines. Creator of Vue Stripe, Vue.js Community Expert for Stripe, and founder of Open Source Software PH (OSSPH).',
                jobTitle: ['Co-founder & CTO, Barako Technologies', 'VP of Engineering, MYCURE Inc.'],
                worksFor: [
                  { '@id': 'https://jofftiquez.dev/#barako' },
                  { '@type': 'Organization', name: 'MYCURE Inc.', url: 'https://mycure.md' },
                ],
                alumniOf: { '@type': 'Organization', name: 'Parmazip', sameAs: 'https://www.linkedin.com/company/parmazip' },
                memberOf: {
                  '@type': 'ProgramMembership',
                  programName: 'Vue.js Community Expert for Stripe',
                  hostingOrganization: { '@type': 'Organization', name: 'Stripe', url: 'https://stripe.com' },
                },
                homeLocation: { '@type': 'Place', name: 'Manila, Philippines' },
                knowsAbout: ['Vue.js', 'Nuxt', 'JavaScript', 'TypeScript', 'Stripe', 'Payments', 'Open source', 'Startup engineering'],
                sameAs: [
                  'https://github.com/jofftiquez',
                  'https://x.com/jrtiquez',
                  'https://www.linkedin.com/in/jofftiquez/',
                  'https://stackoverflow.com/users/2889614/jofftiquez',
                  'https://blog.ossph.org/author/jofftiquez/',
                ],
              },
              {
                '@type': 'Organization',
                '@id': 'https://jofftiquez.dev/#barako',
                name: 'Barako Technologies, Inc.',
                url: 'https://barako.tech',
                founder: { '@id': 'https://jofftiquez.dev/#person' },
              },
              {
                '@type': 'Organization',
                name: 'Open Source Software PH (OSSPH)',
                alternateName: 'OSSPH',
                url: 'https://ossph.org',
                foundingDate: '2021',
                founder: { '@id': 'https://jofftiquez.dev/#person' },
              },
              {
                '@type': 'SoftwareSourceCode',
                name: 'Vue Stripe',
                description: 'The most popular Vue.js library for Stripe: Stripe Elements and Checkout as Vue components.',
                url: 'https://vuestripe.com',
                codeRepository: 'https://github.com/vue-stripe/vue-stripe',
                programmingLanguage: 'TypeScript',
                dateCreated: '2017',
                author: { '@id': 'https://jofftiquez.dev/#person' },
                maintainer: { '@id': 'https://jofftiquez.dev/#person' },
              },
              {
                '@type': 'WebSite',
                '@id': 'https://jofftiquez.dev/#website',
                url: 'https://jofftiquez.dev',
                name: 'Joff Tiquez',
                publisher: { '@id': 'https://jofftiquez.dev/#person' },
              },
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

  // Static site generation for Vercel
  nitro: {
    preset: 'static',
  },

  // Pre-render all routes
  routeRules: {
    '/**': { prerender: true },
  },
});
