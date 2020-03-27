<template lang="pug">
  v-container(class="fill-height")
    v-app-bar(
      app
      fixed
      dark
      flat
    )
      v-btn(icon :to="{ name: 'index' }")
        v-icon mdi-arrow-left
    v-row(justify="center" align="center")
      v-col(cols="12" md="8")
        v-avatar(size="100").elevation-1
          img(src="@/assets/images/me.jpg")
      v-col(cols="12" md="8")
        h1 Hello!
        p Joff here! I am a web developer by profession, and by passion. I have more than #[b {{years}} years of experience] in using JavaScript.
        p I am also an open-source contributor and advocate. I like helping people on their projects, and I am also an author for these humble projects:
        ul.mb-4
          li(v-for="(project, key) in projects" :key="key")
            a(:href="project.link" :alt="project.description" target="_blank" rel="noreferrer") {{project.name}}
          li and #[a(:href="social[0].link" target="_blank" rel="noreferrer") more]
        p Here's #[a(href="https://randomcodetips.com" target="_blank" rel="noreferrer") my blog] about random coding tips.
        p My hobbies includes Rock Climbing, Surfing, and Trail Running.
        p To know more about me visit the following:&nbsp;
          template(v-for="(soc, key) in social")
            a(:href="soc.link" target="_blank" rel="noreferrer") #[b {{soc.name}}&nbsp;]
    v-dialog(
      v-model="gpgDialog"
      width="700"
      scrollable
      persistent
      dark
    )
      v-card
        v-toolbar(flat color="black")
          v-toolbar-title GPG PUBLIC KEY
          v-spacer
          v-btn(icon @click="gpgDialog = false")
            v-icon mdi-close
        v-card-text
          v-textarea(
            v-model="gpgPubKey"
            rows="20"
            readonly
          )
    v-footer(
      app
      fixed
      dark
    )
      v-spacer
      v-btn(
        text
        small
        @click="gpgDialog = true"
      ) Send me an ecrypted message :)
</template>

<script>
import headMeta from '@/utils/head-meta';
export default {
  data () {
    return {
      gpgDialog: false,
      gpgPubKey: `-----BEGIN PGP PUBLIC KEY BLOCK-----

mQENBF5ErY8BCAC+uHIv4qIYH5TsRmGtp8zx3GSOC2vhM4wsa929OLcGDnS2xCdT
yEGoBDaNNUwH17WRf599ZdikDzH/SPdZFQm1riZLLLBgiGCpfLN2hMv9ZaBue1ul
aTAq/sopmkJ6q6t3bHMZWFem4bJokcomK7dzBJi15Yw/iRsv/I0Us5HWtTHVHC0+
iMXGI2KecvQoRJS2kJ4hFz51A4AqtRbxu8K13G/8Qoc14sQwshLylNVlkQhwkqvx
laGaWr1k3RNCGsfuvcEuSThBiyUVzfYML/Ukrtro8r5qC5g6Xx2pweQW8xSt6tt6
cMnsd8FgJmjlzZYeBon8j4YGolbD93VB1K/jABEBAAG0KUpvZmZlcnNvbiBSIFRp
cXVleiA8am9mZnRpcXVlekBnbWFpbC5jb20+iQFUBBMBCAA+FiEER1FgeD9AAhHu
agPwHDpffUU9epQFAl5ErY8CGwMFCQPCZwAFCwkIBwIGFQoJCAsCBBYCAwECHgEC
F4AACgkQHDpffUU9epTE/Af+IjYoRkLeOdwvK+wVkl1/0wFaqsMUUNExHlDQ11+9
AkHgJUyI0fBwzeT6ADs/60/VPL+EmC3+S65bkwdzV9MS52ygE/2AVWxykP41jv4/
Q9bvCf4QVtdoa9sfZO/1Bl2INemXMRaX+wHG+rnCvbDy085YZOoCXhGPP20lVv6d
fqptMH6L+4KntUJnqv8Kel3HmcnfqvMJcf/BOcoiJrz411oH0gNLVl7HKZ1u7RMe
DK9AkgFavMUtH5pq2zSljxOmDIeiZwRGBCDDnWFHNyv58iQQw9y2eJbGZ2ReWKT6
oNfzRaOAXi7A+/DYNzQy3ZVYkRGS52lqXNBgr0tVkDP4p7kBDQReRK2PAQgAs5O3
e0/QTFExPLUQtqmvVgxw31VH7XUau1JtUiENvyiLkjIFSSloXCuTzLwO1vO1e7Qq
TFbq3bD9iVDvdTGptsNyoRHH2rcXnugtU8sgEMKC0cvtzfeRVer+PkWNXOmvU5ri
aiXA9E/rrYehCyKqAoC2O9m/i5yqykx/+k9EXG8r4Fe6yQdaJsrgdsAMJZ2I0ouV
ZV/vK6Ppl9EY9sDeTYsC83ERmH8KQdt7eaVjHTXRPWRSlfbjzq8hhbnDgD8eTaGp
TpOisUe2vAahxZeGE6XbdlL33RTIlcJOzXitP8hURDrB9zh+smiF9GZ3NsMtGtq4
D62b3yHp6aAQOKVxGQARAQABiQE8BBgBCAAmFiEER1FgeD9AAhHuagPwHDpffUU9
epQFAl5ErY8CGwwFCQPCZwAACgkQHDpffUU9epQDMwgAk/6XB0uK2LQF1h++a7f/
huts+5KhL4R55StEPJZiEAXyfMWpK+2NzZCLrYjSU81u7ZlAuWBVDbs2xTKIy7Vi
B7WREOLFLd8qQUz4MtHY2TVGZ1JrYXlCOZ3I8KxkwM0en0EWxpmhn2PY6RwVqTqw
kUMMS/HQcmj8d07Bv2HNoDNb/ZBZAmS9ScU/dp9+wazjCFmTvOGNI5D9Y4BP39vU
HvX8LKc86AYR2IvPEo9F9ZykUbPieOqx+09pMxFICAMaWog7sLJKVhfkiooenERn
s1/ogVjCco74ja0bcjncB0iBfnq1++btE5CbzUbQUx9FYoZr8464w5JNXARg2s1H
oA==
=8qQL
-----END PGP PUBLIC KEY BLOCK-----`,
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
  head () {
    return headMeta({
      title: 'Jofferson Ramirez Tiquez | Web Developer | Open-source software advocate',
      description: `I am a web developer by profession, and by passion. I have more than ${new Date().getFullYear() - 2013} years of experience in using JavaScript.`,
      socialBanner: require('~/assets/images/me.jpg'),
    });
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
