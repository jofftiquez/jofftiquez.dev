<template>
  <div :data-theme="theme">
    <div class="navbar fixed bg-base-100 z-40 shadow-sm">
      <div class="navbar-start">
        <nuxt-link class="btn btn-ghost md:text-xl" to="/">jofftiquez.dev</nuxt-link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <!-- TODO: You can add menu here -->
      </div>
      <div class="navbar-end">
        <button
          class="btn btn-circle"
          @click="toggleTheme = !toggleTheme"
        >
          <i v-if="toggleTheme" class="las la-sun text-3xl"></i>
          <i v-else class="las la-moon text-3xl"></i>
        </button>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
const THEMES = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
];
export default {
  setup () {
    const theme = ref(null);
    watch(theme, (value) => {
      localStorage.setItem('daisyui-theme', value);
    });
    onMounted(() => {
      theme.value = localStorage.getItem('daisyui-theme') || 'dark';
      toggleTheme.value = theme.value === 'dark';
    });

    const toggleTheme = ref(false);
    watch(toggleTheme, (value) => {
      if (value) {
        theme.value = 'dark';
      } else {
        theme.value = 'light';
      }
    });
    return {
      toggleTheme,
      theme,
      themes: THEMES,
    };
  },
};
</script>
