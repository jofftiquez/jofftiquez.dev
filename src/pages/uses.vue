<template>
  <main class="mx-auto md:max-w-3xl px-5 py-5 md:py-7 min-h-screen">
    <h1 class="text-4xl mb-10">Uses</h1>

    <section class="mb-8">
      <h2 class="text-xl mb-2">Editor</h2>
      <ul>
        <li>
          <a href="https://code.visualstudio.com/" target="_blank" class="underline hover:text-primary">Vistual Studio Code</a>
        </li>
        <li>
          Font: <a href="https://www.jetbrains.com/lp/mono/" target="_blank" class="underline hover:text-primary">JetBrains Mono</a>
        </li>
        <li>
          Theme: <a href="https://github.com/catppuccin/catppuccin" target="_blank" class="underline hover:text-primary">Catppuccin</a>
        </li>
        <li>
          Icons: <a href="https://github.com/catppuccin/vscode-icons" target="_blank" class="underline hover:text-primary">Catppuccin Icons</a>
        </li>
      </ul>
    </section>

    <section class="mb-8">
      <h2 class="text-xl mb-2">Terminal</h2>
      <ul>
        <li>
          <a href="https://iterm2.com/" target="_blank" class="underline hover:text-primary">iTerm 2</a>, running on <a href="https://github.com/romkatv/powerlevel10k" target="_blank" class="underline hover:text-primary">PowerLevel10K</a> prompt on <a href="https://www.zsh.org/" target="_blank" class="underline hover:text-primary">zsh</a>
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
          MacBook Pro 14" (2021) 16GB RAM, 1TB SSD
        </li>
        <li>
          Monitors: Samsung, HKC
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import { definePageMeta } from '#imports';
import { useHead } from '#app';
import ogBanner from '../assets/images/og-banner.png';

export default {
  setup () {
    definePageMeta({
      layout: 'default',
    });

    const metaTitle = 'Uses - Joff Tiquez';
    const metaDescription = 'A list of tools and software I use for development and productivity';

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

    return {};
  },
};
</script>

<style scoped>
li::before {
  content: '• ';
}
</style>
