<script setup>
import { definePageMeta, useSeoMeta, onMounted } from '#imports';
import { SOCIAL_LINKS } from '~/constants';

const ogImage = 'https://jofftiquez.dev/og-banner.png';

definePageMeta({
  layout: 'default',
  pageName: 'GUI (Graphical User Interface)',
  order: 1,
});

const metaTitle = 'Home - Joff Tiquez';
const metaDescription = 'Web Developer from 🇵🇭';

useSeoMeta({
  title: metaTitle,
  ogTitle: metaTitle,
  description: metaDescription,
  ogDescription: metaDescription,
  ogImage: ogImage,
  twitterImage: ogImage,
  url: 'https://jofftiquez.dev/gui',
  ogUrl: 'https://jofftiquez.dev/gui',
  twitterCard: 'summary_large_image',
});

const socialLinks = SOCIAL_LINKS;

onMounted(() => {
  const effects = [
    'fog',
    'clouds',
    'net',
    'trunk',
    'halo',
  ];

  const effect = effects[Math.floor(Math.random() * effects.length)];

  // TODO: standardize a method to load VANTA effect
  switch (effect) {
    case 'fog':
      globalThis.VANTA && globalThis.VANTA.FOG({
        el: '#gui-page',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0xffffff,
        midtoneColor: 0x343131,
        lowlightColor: 0x35333e,
        baseColor: 0x0,
        blurFactor: 0.59,
        speed: 3.00,
        zoom: 0.40,
      });
      break;
    case 'clouds':
      globalThis.VANTA && globalThis.VANTA.CLOUDS({
        el: '#gui-page',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        skyColor: 0x0,
        cloudColor: 0x4e4e52,
        cloudShadowColor: 0x0,
        sunColor: 0x0,
        sunGlareColor: 0x0,
        sunlightColor: 0x0,
        speed: 2.00,
      });
      break;
    case 'net':
      globalThis.VANTA && globalThis.VANTA.NET({
        el: '#gui-page',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xffffff,
        backgroundColor: '#181e23',
        spacing: 20.00,
      });
      break;
    case 'trunk':
      globalThis.VANTA && globalThis.VANTA.TRUNK({
        el: '#gui-page',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x433d3e,
        backgroundColor: 0x191e22,
        spacing: 1.50,
        chaos: 3.00,
      });
      break;
    case 'halo':
      globalThis.VANTA && globalThis.VANTA.HALO({
        el: '#gui-page',
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        baseColor: 0x0,
        backgroundColor: '#181e23',
        amplitudeFactor: 3.00,
        xOffset: 0.15,
        size: 0.60,
      });
  }
});
</script>

<template>

  <main id="gui-page" class="hero min-h-screen bg-base-100">
    <div class="w-full min-h-screen px-5 md:px-8">
      <div class="max-w-3xl mx-auto">
        <div class="flex flex-col justify-center min-h-screen pt-24 pb-12">
          <h1 data-aos="fade-down" class="text-4xl md:text-7xl font-bold mb-6">Hi 👋</h1>
          <h1 data-aos="fade-down" class="text-4xl md:text-4xl font-bold mb-6">I'm Joff Tiquez</h1>
          <div class="mb-10 space-y-4">
            <p class="text-lg">
              Software engineer, startup CTO and open source advocate from Manila, Philippines 🇵🇭. Fueled by kapeng barako, powered by open source.
            </p>
            <p>
              I've been building for the web for more than a decade, mostly in JavaScript and Vue.js. In 2016 I published my first open source project. In 2017 I created <a href="https://vuestripe.com" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-primary">Vue Stripe</a>, now the most popular Vue.js library for Stripe (1.1K+ GitHub stars, 60K+ monthly npm downloads). It's listed in <a href="https://docs.stripe.com/sdks/community" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-primary">Stripe's official community libraries</a>, and I'm the <b>Vue.js Community Expert for Stripe</b>.
            </p>
            <p>
              In 2021 I founded <a href="https://ossph.org" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-primary">Open Source Software PH (OSSPH)</a> to help Filipino developers make their first contributions and keep going.
            </p>
            <p>
              These days I'm <b>Co-founder &amp; CTO</b> of <a href="https://barako.tech" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-primary">Barako Technologies</a>, <b>VP of Engineering</b> at <a href="https://mycure.md" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-primary">MYCURE Inc.</a>, and <b>CTO</b> of <a href="https://parmazip.ca" target="_blank" rel="noopener" class="underline underline-offset-2 hover:text-primary">Parmazip</a>.
            </p>
            <p>
              Off the keyboard: cats, cycling and rock climbing. <nuxt-link to="/open-source" class="underline underline-offset-2 hover:text-primary">See my open source work →</nuxt-link>
            </p>
          </div>
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
