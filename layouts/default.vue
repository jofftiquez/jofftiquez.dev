<template lang="pug">
  v-app(dark)#app
    v-content.terminal-background
      nuxt
</template>

<style scoped>
.v-application,
.v-application .display-4,
.v-application .display-3,
.v-application .display-2,
.v-application .display-1,
.v-application .headline,
.v-application .title,
.v-application .subtitle-1,
.v-application .subtitle-2,
.v-application .body-2,
.v-application .body-1,
.v-application .caption,
.v-application .overline {
  font-family: 'Source Code Pro', monospace;
  color: white;
}

.terminal-background {
  background-color: #555753;
}
</style>
