<script setup>
import { definePageMeta, useSeoMeta, onMounted } from '#imports';
import { SOCIAL_LINKS } from '~/constants';
import ogBanner from '../assets/images/og-banner.png';

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
  image: ogBanner,
  ogImage: ogBanner,
  url: 'https://jofftiquez.com/gui',
  ogUrl: 'https://jofftiquez.com/gui',
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
    <div class="grid grid-cols-1 md:grid-cols-2 h-screen p-4 md:p-0">

      <!-- <div class="hidden md:flex relative justify-center">
        <img class="w-[500px] bottom-0 absolute" src="../assets/images/jofftiquez-compressed.png" alt="">
      </div> -->

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
