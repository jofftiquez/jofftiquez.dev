<template>
  <div class="mb-8 space-y-4" data-aos="fade-up">
    <div class="flex flex-col md:flex-row gap-4">
      <!-- Category Filter -->
      <div class="flex-1">
        <label for="category-filter" class="block text-sm font-medium mb-2">
          Filter by Category
        </label>
        <select
          id="category-filter"
          v-model="selectedCategory"
          @change="handleCategoryChange"
          class="select select-bordered w-full"
        >
          <option value="">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>

      <!-- Tag Filter -->
      <div class="flex-1">
        <label for="tag-filter" class="block text-sm font-medium mb-2">
          Filter by Tag
        </label>
        <select
          id="tag-filter"
          v-model="selectedTag"
          @change="handleTagChange"
          class="select select-bordered w-full"
        >
          <option value="">All Tags</option>
          <option v-for="tag in tags" :key="tag" :value="tag">
            #{{ tag }}
          </option>
        </select>
      </div>
    </div>

    <!-- Active Filters Display -->
    <div
      v-if="selectedCategory || selectedTag"
      class="flex flex-wrap gap-2 items-center"
      role="region"
      aria-live="polite"
      aria-label="Active filters"
    >
      <span class="text-sm font-medium">Active Filters:</span>
      <button
        v-if="selectedCategory"
        @click="clearCategory"
        class="badge badge-primary gap-2"
        :aria-label="`Remove category filter: ${selectedCategory}`"
      >
        {{ selectedCategory }}
        <span class="cursor-pointer" aria-hidden="true">×</span>
      </button>
      <button
        v-if="selectedTag"
        @click="clearTag"
        class="badge badge-secondary gap-2"
        :aria-label="`Remove tag filter: ${selectedTag}`"
      >
        #{{ selectedTag }}
        <span class="cursor-pointer" aria-hidden="true">×</span>
      </button>
      <button
        @click="clearAllFilters"
        class="btn btn-ghost btn-xs"
        aria-label="Clear all filters"
      >
        Clear All
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'BlogFilters',
  props: {
    categories: {
      type: Array,
      required: true,
      default: () => [],
    },
    tags: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  emits: ['update:category', 'update:tag'],
  setup(props, { emit }) {
    const selectedCategory = ref('');
    const selectedTag = ref('');

    const handleCategoryChange = () => {
      emit('update:category', selectedCategory.value);
    };

    const handleTagChange = () => {
      emit('update:tag', selectedTag.value);
    };

    const clearCategory = () => {
      selectedCategory.value = '';
      emit('update:category', '');
    };

    const clearTag = () => {
      selectedTag.value = '';
      emit('update:tag', '');
    };

    const clearAllFilters = () => {
      selectedCategory.value = '';
      selectedTag.value = '';
      emit('update:category', '');
      emit('update:tag', '');
    };

    return {
      selectedCategory,
      selectedTag,
      handleCategoryChange,
      handleTagChange,
      clearCategory,
      clearTag,
      clearAllFilters,
    };
  },
});
</script>
