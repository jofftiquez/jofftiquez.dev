<template>

  <main class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-2xl">
        <h1 data-aos="fade-down" class="text-4xl md:text-7xl font-bold mb-6">Hi 👋</h1>
        <h1 data-aos="fade-down" class="text-4xl md:text-4xl font-bold mb-6">I'm Joff Tiquez</h1>
        <p class="mb-10">
          I am a web developer from Manila 🇵🇭 For the past decade I am mostly focusing on web development using JavaScript.
        </p>
        <div class="grid grid-flow-col gap-4">
          <template v-for="(link, index) in socialLinks" :key="index">
            <div
              data-aos="fade-in"
              class="tooltip tooltip-bottom"
              :data-aos-delay="index * 200"
              :data-tip="link.name"
            >
              <a :href="link.url" target="_blank">
                <i :class="`${link.icon} text-4xl`"></i>
              </a>
            </div>
          </template>
        </div>
      </div>
    </div>
  </main>

</template>

<script>
import { definePageMeta } from '#imports';
import { SOCIAL_LINKS } from '~/constants';
import { useHead } from '#app';
import ogBanner from '../assets/images/og-banner.png';

export default {
  setup () {
    definePageMeta({
      layout: 'default',
    });

    const metaTitle = 'Home - Joff Tiquez';
    const metaDescription = 'Web Developer from 🇵🇭';

    useHead({
      title: metaTitle,
      description: metaDescription,
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: ogBanner,
          title: metaTitle,
          description: metaDescription,
        },
      ],
    });

    return {
      socialLinks: SOCIAL_LINKS,
    };
  },
};
</script>
