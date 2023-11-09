<template>

  <main class="hero min-h-screen bg-base-100">
    <div class="grid grid-cols-1 md:grid-cols-2 h-screen p-4 md:p-0">

      <div class="hidden md:flex relative justify-center">
        <img class="w-[500px] bottom-0 absolute" src="../assets/images/jofftiquez-compressed.png" alt="">
      </div>

      <div class="max-w-2xl ">
        <div class="flex flex-col justify-center h-screen">
          <h1 data-aos="fade-down" class="text-4xl md:text-7xl font-bold mb-6">Hi 👋</h1>
          <h1 data-aos="fade-down" class="text-4xl md:text-4xl font-bold mb-6">I'm Joff Tiquez</h1>
          <p class="mb-10">
            I am a web developer from Manila 🇵🇭 For the past decade I am mostly focusing on web development using JavaScript. See my works <nuxt-link to="/open-source" class="underline underline-offset-2 hover:text-primary">here</nuxt-link>.
          </p>
          <div class="flex flex-wrap gap-8">
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
    </div>
  </main>

</template>

<script>
import { definePageMeta, useSeoMeta } from '#imports';
import { SOCIAL_LINKS } from '~/constants';
import ogBanner from '../assets/images/og-banner.png';

export default {
  setup () {
    definePageMeta({
      layout: 'default',
    });

    const metaTitle = 'Home - Joff Tiquez';
    const metaDescription = 'Web Developer from 🇵🇭';

    useSeoMeta({
      title: metaTitle,
      ogTitle: metaTitle,
      description: metaDescription,
      ogDescription: metaDescription,
      image: ogBanner,
      ogImage: ogBanner,
      url: 'https://jofftiquez.com/gui',
      ogUrl: 'https://jofftiquez.com/gui',
      twitterCard: 'summary_large_image',
    });

    return {
      socialLinks: SOCIAL_LINKS,
    };
  },
};
</script>
