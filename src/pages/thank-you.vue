<template>
  <main class="mx-auto md:max-w-3xl px-5 py-5 md:py-7 min-h-screen">
    <h1 class="text-4xl mb-10">Thank You</h1>

    <!-- Fetch dependencies and devDependencies from package.json and repeat this section for each one -->
    <section v-for="(repository, name) in dependencies" :key="name" class="mb-8">
      <h2 class="text-xl mb-2">{{ name }}</h2>
      <ul>
        <li>
          <a :href="repository" target="_blank" class="underline hover:text-primary">{{ name }}</a>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import { definePageMeta, useSeoMeta } from '#imports';
import ogBanner from '../assets/images/og-banner.png';
import packageJson from '../package.json';

console.log('packageJson:', packageJson);

export default {
  setup () {
    // Here we'll just add a mock object to represent package.json contents
    const dependencies = Object.fromEntries([...Object.entries(packageJson.dependencies), ...Object.entries(packageJson.devDependencies)].map(([name, version]) => [name, version]));
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
