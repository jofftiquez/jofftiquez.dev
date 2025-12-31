<template>
  <div data-theme="dark" class="bg-base-200 h-[100vh]">
    <!-- Accessibility: Hidden header for screen readers -->
    <header role="banner" class="sr-only">
      <h1>Joff Tiquez - Web Developer</h1>
    </header>

    <slot />

    <!-- Accessibility: Hidden footer for screen readers -->
    <footer role="contentinfo" class="sr-only">
      <p>&copy; {{ new Date().getFullYear() }} Joff Tiquez. All rights reserved.</p>
    </footer>
  </div>
</template>
