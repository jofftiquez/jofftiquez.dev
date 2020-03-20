<template lang="pug">
  v-container(class="fill-height")
    v-row(justify="center" align="center")
      v-col(cols="12" md="8")
        v-avatar(size="250").elevation-1
          img(src="@/assets/images/me.jpg")
      v-col(cols="12" md="8")
        h1 Hello!
        p Joff here! I am a web developer by profession, and by passion. I have more than #[b {{years}} years of experience] in using JavaScript.
        p I am also an open-source contributor and advocate. I like helping people on their projects, and I am also an author for these humble projects:
        ul.mb-4
          li(v-for="(project, key) in projects" :key="key")
            a(:href="project.link" :alt="project.description" target="_blank" rel="noreferrer") {{project.name}}
          li and #[a(:href="social[0].link" target="_blank" rel="noreferrer") more]
        p Here's #[a my blog] about random coding tips.
        p My hobbies includes Rock Climbing, Surfing, and Trail Running.
        p To know more about me visit the following:&nbsp;
          template(v-for="(soc, key) in social")
            a(:href="soc.link" target="_blank" rel="noreferrer") #[b {{soc.name}}&nbsp;]
        //- ul.mb-4
          li(v-for="(soc, key) in social" :key="key")
</template>

<script>
export default {
  data () {
    return {
      social: [
        {
          name: 'GitHub',
          link: 'https://github.com/jofftiquez',
        },
        {
          name: 'Twitter',
          link: 'https://twitter.com/jrtiquez',
        },
        {
          name: 'LinkedIn',
          link: 'https://linkedin/in/jofftiquez',
        },
      ],
      projects: [
        {
          name: 'Vue Stripe Checkout',
          description: 'A vue plugin for Stripe checkout.',
          link: 'https://github.com/jofftiquez/vue-stripe-checkout',
        },
        {
          name: 'Paymongo for Node.js',
          description: 'Lightweight (6.6KB) node.js client for Paymongo API.',
          link: 'https://github.com/jofftiquez/paymongo',
        },
        {
          name: 'Vue Morphling',
          description: 'Vue filters and directives collection.',
          link: 'https://github.com/jofftiquez/vue-morphling',
        },
        {
          name: 'Vue HTML to Paper',
          description: 'Vue mixin for paper printing html elements.',
          link: 'https://github.com/mycurelabs/vue-html-to-paper',
        },
        {
          name: 'Vue HTML to Canvas',
          description: 'Vue mixin for Html2Canvas.',
          link: 'https://github.com/mycurelabs/vue-html2canvas',
        },
        {
          name: 'Vue Wysiwyg',
          description: 'A simple wysiwyg editor for Vue.js',
          link: 'https://mycurelabs.github.io/vue-wysiwyg/',
        },
      ],
    };
  },
  computed: {
    years () {
      const start = 2013;
      return new Date().getFullYear() - start;
    },
  },
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: #8AE234;
}
</style>
