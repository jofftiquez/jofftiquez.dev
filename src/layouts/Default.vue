<template>
  <div :data-theme="theme">
    <!-- Accessibility: Main navigation header -->
    <header role="banner">
      <nav
        :class="`navbar ${isGui ? 'fixed' : ''} bg-base-100 z-40 shadow-sm`"
        role="navigation"
        aria-label="Main navigation"
      >
        <div class="navbar-start">
          <div class="dropdown">
            <button
              class="btn btn-ghost lg:hidden"
              aria-expanded="false"
              aria-haspopup="true"
              aria-label="Open navigation menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </button>
            <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" role="menu">
              <li role="none">
                <nuxt-link class="btn btn-ghost" to="/" role="menuitem">Terminal<b aria-hidden="true">_</b></nuxt-link>
              </li>
              <li role="none">
                <nuxt-link class="btn btn-ghost" to="/gui" role="menuitem">GUI</nuxt-link>
              </li>
              <li role="none">
                <nuxt-link class="btn btn-ghost" to="/blogs" role="menuitem">Blogs</nuxt-link>
              </li>
              <li role="none">
                <nuxt-link class="btn btn-ghost" to="/uses" role="menuitem">Uses</nuxt-link>
              </li>
              <li role="none">
                <nuxt-link class="btn btn-ghost" to="/open-source" role="menuitem">Open Source</nuxt-link>
              </li>
            </ul>
          </div>
          <nuxt-link class="btn btn-ghost normal-case md:text-xl" to="/" aria-label="jofftiquez.dev - Go to homepage">
            <i class="las la-terminal text-3xl" aria-hidden="true"></i>
            jofftiquez.dev
          </nuxt-link>
        </div>
        <div class="navbar-end gap-4">
          <div class="hidden lg:flex" role="menubar">
            <nuxt-link class="btn btn-ghost" to="/" role="menuitem">Terminal<b aria-hidden="true">_</b></nuxt-link>
            <nuxt-link class="btn btn-ghost" to="/gui" role="menuitem">GUI</nuxt-link>
            <nuxt-link class="btn btn-ghost" to="/blogs" role="menuitem">Blogs</nuxt-link>
            <nuxt-link class="btn btn-ghost" to="/uses" role="menuitem">Uses</nuxt-link>
            <nuxt-link class="btn btn-ghost" to="/open-source" role="menuitem">Open Source</nuxt-link>
          </div>
        <!-- <button
          class="btn btn-circle"
          @click="toggleTheme = !toggleTheme"
        >
          <i v-if="toggleTheme" class="las la-sun text-2xl"></i>
          <i v-else class="las la-moon text-2xl"></i>
        </button> -->
        </div>
      </nav>
    </header>

    <!-- Main content area -->
    <main id="main-content" role="main">
      <slot />
    </main>
  </div>
</template>

<script>
import { ref, watch, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
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

    const route = useRoute();
    const isGui = computed(() => route.name === 'gui');

    return {
      toggleTheme,
      theme,
      themes: THEMES,
      isGui,
    };
  },
};
</script>
