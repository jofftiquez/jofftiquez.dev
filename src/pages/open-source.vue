<template>
  <main class="mx-auto md:max-w-3xl px-5 py-5 md:py-7 min-h-screen">
    <h1 class="text-4xl mb-10">Open Source</h1>
    <section class="mb-8">
      <h2 class="text-xl mb-2">Vue Stripe</h2>
      <p>A collection of component and plugins for Stripe</p>
      <div class="flex gap-2">
        <a href="https://vuestripe.com" target="_blank" class="underline underline-offset-2 hover:text-primary">Website</a>
        <a href="https://github.com/vue-stripe/vue-stripe" target="_blank" class="underline underline-offset-2 hover:text-primary">1K stars on GitHub</a>
      </div>
    </section>
    <section class="mb-8">
      <h2 class="text-xl mb-2">Open Source Software PH</h2>
      <p>The leading Open Source Software Community in the Philippines</p>
      <div class="flex gap-2">
        <a href="https://ossph.org" target="_blank" class="underline underline-offset-2 hover:text-primary">Website</a>
        <a href="https://blog.ossph.org" target="_blank" class="underline underline-offset-2 hover:text-primary">Blog</a>
      </div>
    </section>
    <section class="mb-8">
      <h2 class="text-xl mb-2">Faker.js UI</h2>
      <p>A simple and intuitive UI for Faker.js</p>
      <div class="flex gap-2">
        <a href="https://fakerjsui.com/" target="_blank" class="underline underline-offset-2 hover:text-primary">Website</a>
        <a href="https://github.com/jofftiquez/faker-js-ui" target="_blank" class="underline underline-offset-2 hover:text-primary">185 stars on GitHub</a>
      </div>
    </section>
    <section class="mb-8">
      <h2 class="text-xl mb-2">Paymongo</h2>
      <p>A lightweight Node.js client for Paymongo API</p>
      <div class="flex gap-2">
        <a href="https://paymongo.ossph.org/" target="_blank" class="underline underline-offset-2 hover:text-primary">Website</a>
        <a href="https://github.com/OSSPhilippines/paymongo" target="_blank" class="underline underline-offset-2 hover:text-primary">84 stars on GitHub</a>
      </div>
    </section>
    <section class="mb-8">
      <h2 class="text-xl mb-2">Vue HTML To Paper</h2>
      <p>A Vue plugin for printing html elements</p>
      <div class="flex gap-2">
        <a href="https://mycurelabs.github.io/vue-html-to-paper/" target="_blank" class="underline underline-offset-2 hover:text-primary">Website</a>
        <a href="https://github.com/mycurelabs/vue-html-to-paper" target="_blank" class="underline underline-offset-2 hover:text-primary">288 stars on GitHub</a>
      </div>
    </section>
    <section class="mb-8">
      <h2 class="text-xl mb-2">Follow me</h2>
      <p>Follow me to be updated on my work and future projects</p>
      <div class="flex gap-2">
        <a href="https://github.com/jofftiquez" target="_blank" class="underline underline-offset-2 hover:text-primary">GitHub</a>
        <a href="https://twitter.com/jrtiquez" target="_blank" class="underline underline-offset-2 hover:text-primary">Twitter</a>
        <a href="https://facebook.com/jofftiquez" target="_blank" class="underline underline-offset-2 hover:text-primary">Facebook</a>
      </div>
    </section>
    <section class="mb-8">
      <h2 class="text-xl mb-2">Sponsors 🩷</h2>
      <p>If you liked my projects or just simply want to support me, you can sponsor me on GitHub. Thank you 🙏</p>
      <div class="flex gap-2">
        <a href="https://github.com/sponsors/jofftiquez" target="_blank" class="underline underline-offset-2 hover:text-primary">GitHub Sponsors</a>
      </div>
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
    });

    const metaTitle = 'Open Source - Joff Tiquez';
    const metaDescription = 'A collection of my open source projects';

    useSeoMeta({
      title: metaTitle,
      ogTitle: metaTitle,
      description: metaDescription,
      ogDescription: metaDescription,
      image: ogBanner,
      ogImage: ogBanner,
      url: 'https://jofftiquez.com/open-source',
      ogUrl: 'https://jofftiquez.com/open-source',
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
