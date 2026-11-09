<template>
  <main class="mx-auto md:max-w-3xl px-5 py-5 md:py-7 min-h-screen">
    <h1 class="text-4xl mb-6">About</h1>
    <p class="mb-10">
      I'm Joff Tiquez, a software engineer, startup CTO and open source advocate from Manila, Philippines. I created <a href="https://vuestripe.com" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-primary">Vue Stripe</a>, the most popular Vue.js library for Stripe. I'm the Vue.js Community Expert for Stripe, and I founded <a href="https://ossph.org" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-primary">Open Source Software PH (OSSPH)</a>.
    </p>

    <section class="mb-10">
      <h2 class="text-xl mb-4">Work &amp; ventures</h2>
      <div class="space-y-6">
        <div>
          <h3 class="font-bold">Co-founder &amp; CTO, <a href="https://barako.tech" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-primary">Barako Technologies</a></h3>
          <p>A Manila-based software company building workflow automation, web apps, customer portals and fractional CTO services.</p>
        </div>
        <div>
          <h3 class="font-bold">VP of Engineering, <a href="https://mycure.md" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-primary">MYCURE Inc.</a></h3>
          <p>An EMR and clinic management system used by healthcare providers across the Philippines.</p>
        </div>
        <div>
          <h3 class="font-bold">Former CTO, <a href="https://www.linkedin.com/company/parmazip" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-primary">Parmazip</a></h3>
          <p>An earlier startup: a Toronto-based telepharmacy service that connected patients with pharmacists for minor ailment care in Canada.</p>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl mb-4">Open source &amp; community</h2>
      <div class="space-y-6">
        <div>
          <h3 class="font-bold">Creator of <a href="https://vuestripe.com" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-primary">Vue Stripe</a></h3>
          <p>Stripe Elements and Checkout as Vue components, for Vue 3 and Vue 2.7. The most popular Vue.js library for Stripe, with 1.1K+ GitHub stars and 60K+ monthly npm downloads. Listed in <a href="https://docs.stripe.com/sdks/community" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-primary">Stripe's official community libraries</a>.</p>
        </div>
        <div>
          <h3 class="font-bold">Vue.js Community Expert for Stripe</h3>
          <p>I help Vue.js developers build Stripe integrations.</p>
        </div>
        <div>
          <h3 class="font-bold">Founder of <a href="https://ossph.org" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-primary">Open Source Software PH (OSSPH)</a></h3>
          <p>The open source community of the Philippines, helping Filipino developers make their first contributions and keep going. Read <a href="https://blog.ossph.org/the-story-of-open-source-software-ph-ossph/" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-primary">how I started OSSPH</a>.</p>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl mb-4">Timeline</h2>
      <ul class="space-y-2">
        <li><b>2016</b>: published my first open source project, Angular HTTP Assist</li>
        <li><b>2017</b>: created Vue Stripe</li>
        <li><b>2020</b>: guest on GitHub's Open Source Friday to talk about Vue Stripe</li>
        <li><b>2021</b>: founded Open Source Software PH (OSSPH)</li>
        <li><b>Today</b>: Co-founder &amp; CTO of Barako Technologies and VP of Engineering at MYCURE Inc.</li>
      </ul>
    </section>

    <section class="mb-10">
      <h2 class="text-xl mb-4">Speaking &amp; press</h2>
      <ul class="space-y-2">
        <li>
          <a href="https://dev.to/github/vue-stripe-checkout-sometimes-you-need-to-learn-something-because-you-need-to-5h0a" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-primary">GitHub Open Source Friday: Vue Stripe Checkout</a>, live stream with GitHub
        </li>
        <li>Speaker, AWS Siklab Philippines</li>
        <li>Guest speaker, New Era University (Firebase for computer science students)</li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl mb-4">Elsewhere</h2>
      <div class="flex flex-wrap gap-4">
        <a href="https://github.com/jofftiquez" target="_blank" rel="noopener me" class="underline underline-offset-2 hover:text-primary">GitHub</a>
        <a href="https://x.com/jrtiquez" target="_blank" rel="noopener me" class="underline underline-offset-2 hover:text-primary">X</a>
        <a href="https://www.linkedin.com/in/jofftiquez/" target="_blank" rel="noopener me" class="underline underline-offset-2 hover:text-primary">LinkedIn</a>
        <a href="https://github.com/sponsors/jofftiquez" target="_blank" rel="noopener me" class="underline underline-offset-2 hover:text-primary">GitHub Sponsors</a>
        <nuxt-link to="/open-source" class="underline underline-offset-2 hover:text-primary">Open source work</nuxt-link>
        <nuxt-link to="/blogs" class="underline underline-offset-2 hover:text-primary">Blog</nuxt-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import { definePageMeta, useSeoMeta } from '#imports';

const ogImage = 'https://jofftiquez.dev/og-banner.png';

definePageMeta({
  layout: 'default',
  pageName: 'About',
  order: 5,
});

const metaTitle = 'About Joff Tiquez: Startup CTO and Creator of Vue Stripe';
const metaDescription = 'Co-founder & CTO of Barako Technologies, VP of Engineering at MYCURE, creator of Vue Stripe, Vue.js Community Expert for Stripe, and founder of OSSPH.';

useSeoMeta({
  title: metaTitle,
  ogTitle: metaTitle,
  description: metaDescription,
  ogDescription: metaDescription,
  ogImage,
  twitterImage: ogImage,
  ogUrl: 'https://jofftiquez.dev/about',
  twitterCard: 'summary_large_image',
});
</script>
