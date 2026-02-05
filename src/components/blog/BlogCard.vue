<template>
  <article
    data-aos="fade-up"
    class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <figure v-if="post.image" class="relative h-48 overflow-hidden">
      <img
        :src="post.image"
        :alt="`Cover image for ${post.title}`"
        class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        itemprop="image"
      />
    </figure>
    <div class="card-body">
      <div class="flex gap-2 mb-2">
        <span class="badge badge-primary badge-sm" role="text" aria-label="Category">
          {{ post.category }}
        </span>
        <time class="text-sm text-gray-500" :datetime="post.date">
          {{ formatDate(post.date) }}
        </time>
      </div>
      <h2 class="card-title text-xl hover:text-primary transition-colors">
        <nuxt-link :to="postUrl" itemprop="url">
          <span itemprop="headline">{{ post.title }}</span>
        </nuxt-link>
      </h2>
      <p class="text-base-content/70 line-clamp-3" itemprop="description">
        {{ post.description }}
      </p>
      <div
        class="flex flex-wrap gap-2 mt-2"
        v-if="post.tags && post.tags.length"
        role="list"
        aria-label="Tags"
      >
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="badge badge-outline badge-sm"
          role="listitem"
          itemprop="keywords"
        >
          #{{ tag }}
        </span>
      </div>
      <div class="card-actions justify-between items-center mt-4">
        <span v-if="post.readingTime" class="text-sm text-gray-500" aria-label="Reading time">
          {{ post.readingTime }} min read
        </span>
        <nuxt-link
          :to="postUrl"
          class="btn btn-primary btn-sm"
          :aria-label="`Read more about ${post.title}`"
        >
          Read More
        </nuxt-link>
      </div>
    </div>
  </article>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { format } from 'date-fns';

export default defineComponent({
  name: 'BlogCard',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const formatDate = (date) => {
      if (!date) return '';
      // Handle both string dates and Date objects
      const dateObj = typeof date === 'string' ? new Date(date + 'T00:00:00') : new Date(date);
      if (isNaN(dateObj.getTime())) return '';
      return format(dateObj, 'MMM dd, yyyy');
    };

    // Handle both Nuxt Content v3 (path) and v2 (_path) field names
    const postUrl = computed(() => {
      const path = props.post.path || props.post._path || '';
      // Path is like /blogs/hello-world, we need /blogs/hello-world
      return path.startsWith('/') ? path : `/${path}`;
    });

    return {
      formatDate,
      postUrl,
    };
  },
});
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
