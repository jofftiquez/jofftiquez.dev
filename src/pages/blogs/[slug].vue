<template>
  <main class="mx-auto max-w-7xl px-5 py-5 md:py-7 min-h-screen" role="main">
    <article v-if="post" itemscope itemtype="https://schema.org/BlogPosting">
      <!-- Cover Image -->
      <div v-if="post.image" class="mb-8 rounded-lg overflow-hidden" data-aos="fade-up">
        <img
          :src="post.image"
          :alt="`Cover image for ${post.title}`"
          class="w-full h-64 md:h-96 object-cover"
          itemprop="image"
        />
      </div>

      <!-- Title -->
      <h1 class="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up" itemprop="headline">
        {{ post.title }}
      </h1>

      <!-- Meta Information -->
      <BlogMeta
        :date="post.date"
        :author="post.author"
        :category="post.category"
        :tags="post.tags"
        :readingTime="post.readingTime"
      />

      <!-- Content wrapper with TOC sidebar -->
      <div class="flex flex-col lg:flex-row gap-8 mt-8">
        <!-- Main Content -->
        <div class="flex-1 min-w-0 max-w-4xl">
          <div
            class="prose prose-lg prose-invert max-w-none dark:prose-invert"
            data-aos="fade-up"
            data-aos-delay="400"
            itemprop="articleBody"
          >
            <ContentRenderer :value="post" />
          </div>

          <!-- Share Buttons -->
          <BlogShare :title="post.title" :url="currentUrl" class="mt-8" />
        </div>

        <!-- Table of Contents Sidebar -->
        <aside v-if="post.body?.toc?.links?.length" class="lg:w-64 flex-shrink-0">
          <div class="lg:sticky lg:top-8">
            <BlogToc :toc="post.body.toc.links" />
          </div>
        </aside>
      </div>
    </article>

    <!-- 404 Message -->
    <div v-else class="text-center py-20">
      <h1 class="text-4xl font-bold mb-4">Post Not Found</h1>
      <p class="text-xl text-base-content/60 mb-8">
        The blog post you're looking for doesn't exist.
      </p>
      <nuxt-link to="/blogs" class="btn btn-primary">
        View All Posts
      </nuxt-link>
    </div>
  </main>
</template>

<script setup>
import BlogMeta from '~/components/blog/BlogMeta.vue';
import BlogToc from '~/components/blog/BlogToc.vue';
import BlogShare from '~/components/blog/BlogShare.vue';

const route = useRoute();
const slug = route.params.slug;

definePageMeta({
  layout: 'default',
});

// Fetch the blog post using Nuxt Content v2 queryContent
const { data: post } = await useAsyncData(`blog-post-${slug}`, () =>
  queryContent('blogs', slug)
    .findOne()
);

// Get current URL for sharing
const currentUrl = `https://jofftiquez.dev/blogs/${slug}`;

// SEO Meta Tags
if (post.value) {
  const ogImage = post.value.image || 'https://jofftiquez.dev/og-banner.png';

  useSeoMeta({
    title: `${post.value.title} - Joff Tiquez`,
    ogTitle: post.value.title,
    description: post.value.description,
    ogDescription: post.value.description,
    ogImage: ogImage,
    twitterImage: ogImage,
    url: currentUrl,
    ogUrl: currentUrl,
    twitterCard: 'summary_large_image',
    author: post.value.author,
    articlePublishedTime: post.value.date,
    articleAuthor: post.value.author,
    articleTag: post.value.tags,
  });
}
</script>
