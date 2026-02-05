<template>
  <nav
    class="p-4 bg-base-200 rounded-lg"
    data-aos="fade-up"
    data-aos-delay="200"
    aria-label="Table of Contents"
  >
    <h2 class="text-lg font-bold mb-3 text-base-content/80">On this page</h2>
    <ul class="space-y-2 text-sm" role="list">
      <li v-for="link in toc" :key="link.id" role="listitem">
        <a
          :href="`#${link.id}`"
          class="block text-base-content/60 hover:text-primary transition-colors focus:text-primary focus:underline"
          :class="{
            'pl-0': link.depth === 2,
            'pl-3 border-l border-base-300': link.depth === 3,
            'pl-6 border-l border-base-300': link.depth === 4,
          }"
          :aria-label="`Jump to section: ${link.text}`"
        >
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  toc: {
    type: Array,
    required: true,
  },
});
</script>
