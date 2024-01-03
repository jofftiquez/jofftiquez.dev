<template>
  <main class="mx-auto md:max-w-3xl px-5 py-5 md:py-7 min-h-screen">
    <h1 class="text-4xl mb-10">Thank You</h1>

    <!-- Repeat this section for each dependency and devDependency in the package.json file -->
    <section class="mb-8">
      <h2 class="text-xl mb-2">Package Name</h2>
      <ul>
        <li>
          <a href="https://github.com/package/repository" target="_blank" class="underline hover:text-primary">Package Name</a>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import { definePageMeta, useSeoMeta } from '#imports';
import ogBanner from '../assets/images/og-banner.png';

export default {
  setup () {
    definePageMeta({
      layout: 'default',
      pageName: 'Thank You',
      order: 4,
    });

    const metaTitle = 'Thank You - Joff Tiquez';
    const metaDescription = 'Acknowledgement of the open source packages used in this project';

    useSeoMeta({
      title: metaTitle,
      ogTitle: metaTitle,
      description: metaDescription,
      ogDescription: metaDescription,
      image: ogBanner,
      ogImage: ogBanner,
      url: 'https://jofftiquez.com/thank-you',
      ogUrl: 'https://jofftiquez.com/thank-you',
      twitterCard: 'summary_large_image',
    });

    return {};
  },
};
</script>

<style scoped>
li::before {
  content: '• ';
}
</style>
