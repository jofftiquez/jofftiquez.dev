<template>
  <div
    class="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-base-300"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <!-- Date -->
    <div class="flex items-center gap-2 text-base-content/60">
      <i class="las la-calendar" aria-hidden="true"></i>
      <time :datetime="formattedDate">{{ displayDate }}</time>
    </div>

    <!-- Author -->
    <div class="flex items-center gap-2 text-base-content/60">
      <i class="las la-user" aria-hidden="true"></i>
      <span itemprop="author">{{ author }}</span>
    </div>

    <!-- Reading Time -->
    <div v-if="readingTime" class="flex items-center gap-2 text-base-content/60">
      <i class="las la-clock" aria-hidden="true"></i>
      <span>{{ readingTime }} min read</span>
    </div>

    <!-- Category -->
    <div class="flex items-center gap-2">
      <span class="badge badge-primary" role="text" aria-label="Category">{{ category }}</span>
    </div>

    <!-- Tags -->
    <div v-if="tags && tags.length" class="flex items-center gap-2 flex-wrap" role="list" aria-label="Tags">
      <span
        v-for="tag in tags"
        :key="tag"
        class="badge badge-outline"
        role="listitem"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  date: {
    type: [String, Date],
    required: true,
  },
  author: {
    type: String,
    default: 'Joff Tiquez',
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    default: () => [],
  },
  readingTime: {
    type: Number,
    default: null,
  },
});

const formattedDate = computed(() => {
  const date = new Date(props.date);
  return date.toISOString();
});

const displayDate = computed(() => {
  const date = new Date(props.date);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
});
</script>
