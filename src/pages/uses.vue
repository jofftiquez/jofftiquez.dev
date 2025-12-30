<template>
  <main class="mx-auto md:max-w-3xl px-5 py-5 md:py-7 min-h-screen">
    <h1 class="text-4xl mb-10">Uses</h1>

    <section class="mb-8">
      <h2 class="text-xl mb-2">Editor</h2>
      <ul>
        <li>
          <a href="https://cursor.com" target="_blank" class="underline hover:text-primary">Cursor</a>
        </li>
        <li>
          Font: <a href="https://www.jetbrains.com/lp/mono/" target="_blank" class="underline hover:text-primary">JetBrains Mono</a>
        </li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl mb-2">Terminal</h2>
      <ul>
        <li>
          <a href="https://ghostty.org/" target="_blank" class="underline hover:text-primary">Ghostty</a>, running on <a href="https://github.com/romkatv/powerlevel10k" target="_blank" class="underline hover:text-primary">PowerLevel10K</a> prompt on <a href="https://www.zsh.org/" target="_blank" class="underline hover:text-primary">zsh</a>
          </li>
        <li>
          Meslo Nerd Font
        </li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl mb-2">Desktop Apps</h2>
      <ul>
        <li>
          Browser: <a href="https://brave.com/" target="_blank" class="underline hover:text-primary">Brave Browser</a>
        </li>
        <li>
          Launcher: <a href="https://www.raycast.com/" target="_blank" class="underline hover:text-primary">Raycast</a>
        </li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl mb-2">Communication</h2>
      <ul>
        <li>
          <a href="https://discord.com/" target="_blank" class="underline hover:text-primary">Discord</a>
        </li>
        <li>
          <a href="https://telegram.org/" target="_blank" class="underline hover:text-primary">Telegram</a>
        </li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl mb-2">Hardware</h2>
      <ul>
        <li>
          MacBook Pro 14" (2023) 16GB RAM, 1TB SSD, 12 CPU, 19 GPU
        </li>
        <li>
          Monitors: Samsung, HKC, Prism+
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import { definePageMeta, useSeoMeta } from '#imports';

const ogImage = 'https://jofftiquez.dev/og-banner.png';

export default {
  setup () {
    definePageMeta({
      layout: 'default',
      pageName: 'Uses',
      order: 3,
    });

    const metaTitle = 'Uses - Joff Tiquez';
    const metaDescription = 'A list of tools and software I use for development and productivity';

    useSeoMeta({
      title: metaTitle,
      ogTitle: metaTitle,
      description: metaDescription,
      ogDescription: metaDescription,
      ogImage: ogImage,
      twitterImage: ogImage,
      url: 'https://jofftiquez.dev/uses',
      ogUrl: 'https://jofftiquez.dev/uses',
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
