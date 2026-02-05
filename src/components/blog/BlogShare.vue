<template>
  <div class="mt-12 pt-8 border-t border-base-300" data-aos="fade-up" data-aos-delay="300">
    <h3 class="text-xl font-bold mb-4">Share this post</h3>
    <div class="flex gap-4" role="group" aria-label="Share buttons">
      <!-- Twitter -->
      <a
        :href="twitterUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-circle btn-outline hover:btn-primary transition-colors"
        :aria-label="`Share ${title} on Twitter`"
      >
        <i class="lab la-twitter text-2xl" aria-hidden="true"></i>
      </a>

      <!-- LinkedIn -->
      <a
        :href="linkedinUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-circle btn-outline hover:btn-primary transition-colors"
        :aria-label="`Share ${title} on LinkedIn`"
      >
        <i class="lab la-linkedin text-2xl" aria-hidden="true"></i>
      </a>

      <!-- Facebook -->
      <a
        :href="facebookUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-circle btn-outline hover:btn-primary transition-colors"
        :aria-label="`Share ${title} on Facebook`"
      >
        <i class="lab la-facebook text-2xl" aria-hidden="true"></i>
      </a>

      <!-- Copy Link -->
      <button
        @click="copyLink"
        class="btn btn-circle btn-outline hover:btn-primary transition-colors"
        :aria-label="`Copy link to ${title}`"
      >
        <i class="las la-link text-2xl" aria-hidden="true"></i>
      </button>
    </div>
    <div v-if="copied" class="mt-2 text-sm text-success" role="status" aria-live="polite">
      Link copied to clipboard!
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const copied = ref(false);

const twitterUrl = computed(() => {
  const text = encodeURIComponent(props.title);
  const url = encodeURIComponent(props.url);
  return `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
});

const linkedinUrl = computed(() => {
  const url = encodeURIComponent(props.url);
  return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
});

const facebookUrl = computed(() => {
  const url = encodeURIComponent(props.url);
  return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
});

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(props.url);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy link:', err);
  }
};
</script>
