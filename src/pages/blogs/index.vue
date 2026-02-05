<template>
  <main class="mx-auto md:max-w-6xl px-5 py-5 md:py-7 min-h-screen" role="main">
    <h1 class="text-4xl mb-6" data-aos="fade-up">Blog</h1>
    <p class="text-base-content/70 mb-10" data-aos="fade-up" data-aos-delay="100">
      Thoughts, experiences, and learnings about web development, open source, and technology.
    </p>

    <!-- Filters -->
    <BlogFilters
      :categories="categories"
      :tags="allTags"
      @update:category="handleCategoryFilter"
      @update:tag="handleTagFilter"
    />

    <!-- Posts Count -->
    <div class="mb-6" role="status" aria-live="polite">
      <p class="text-sm text-base-content/60">
        Showing {{ filteredPosts.length }} {{ filteredPosts.length === 1 ? 'post' : 'posts' }}
      </p>
    </div>

    <!-- Blog Posts Grid -->
    <div
      v-if="filteredPosts.length"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      role="feed"
      aria-label="Blog posts"
    >
      <BlogCard
        v-for="post in filteredPosts"
        :key="post.path || post._path || post.id"
        :post="post"
      />
    </div>

    <!-- No Posts Message -->
    <div v-else class="text-center py-20" role="status">
      <p class="text-xl text-base-content/60">No blog posts found matching your filters.</p>
      <button @click="clearFilters" class="btn btn-primary mt-4" aria-label="Clear all filters and show all posts">
        Clear Filters
      </button>
    </div>
  </main>
</template>

<script setup>
import BlogCard from '~/components/blog/BlogCard.vue';
import BlogFilters from '~/components/blog/BlogFilters.vue';

const ogImage = 'https://jofftiquez.dev/og-banner.png';

definePageMeta({
  layout: 'default',
  pageName: 'Blogs',
  order: 4,
});

const metaTitle = 'Blog - Joff Tiquez';
const metaDescription = 'Read about web development, open source projects, and technology insights from Joff Tiquez. Explore articles on Vue.js, Nuxt, JavaScript, and more.';

useSeoMeta({
  title: metaTitle,
  ogTitle: metaTitle,
  description: metaDescription,
  ogDescription: metaDescription,
  ogImage: ogImage,
  twitterImage: ogImage,
  url: 'https://jofftiquez.dev/blogs',
  ogUrl: 'https://jofftiquez.dev/blogs',
  twitterCard: 'summary_large_image',
});

// Fetch all blog posts from /blogs directory, sorted by date (newest first)
// Nuxt Content v2 uses queryContent
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryContent('blogs')
    .sort({ date: -1 })
    .find()
);

const allPosts = ref(posts.value || []);
const selectedCategory = ref('');
const selectedTag = ref('');

// Extract unique categories
const categories = computed(() => {
  const cats = allPosts.value.map(post => post.category).filter(Boolean);
  return [...new Set(cats)].sort();
});

// Extract unique tags
const allTags = computed(() => {
  const tags = allPosts.value.flatMap(post => post.tags || []);
  return [...new Set(tags)].sort();
});

// Filter posts based on selected category and tag
const filteredPosts = computed(() => {
  let filtered = allPosts.value;

  if (selectedCategory.value) {
    filtered = filtered.filter(post => post.category === selectedCategory.value);
  }

  if (selectedTag.value) {
    filtered = filtered.filter(post =>
      post.tags && post.tags.includes(selectedTag.value)
    );
  }

  return filtered;
});

const handleCategoryFilter = (category) => {
  selectedCategory.value = category;
};

const handleTagFilter = (tag) => {
  selectedTag.value = tag;
};

const clearFilters = () => {
  selectedCategory.value = '';
  selectedTag.value = '';
};
</script>
