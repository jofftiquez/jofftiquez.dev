<template>
  <div id="terminal" class="p-4 text-white bg-base-200 h-full overflow-scroll" @click="clickOnWrapper">
    <div id="greentings" class="mb-3">
      <p>Hi, I'm Joff &lt;3 Welcome!</p>
      <p>Type '--help' to see available commands.</p>
      <p>If you are not familiar with command line you can switch to <nuxt-link to="/gui" class="underline">gui mode</nuxt-link>.</p>
    </div>
    <div id="output">
      <template v-for="(output, index) in outputList" :key="index">
        <span class="text-primary">guest@jofftiquez.dev <span>{{output.date}}</span><span class="text-secondary"> ~/ $</span><span class="text-white">&nbsp;{{output.commandInput}}</span></span>
        <div v-html="output.html"/>
      </template>
    </div>
    <div id="command">
      <form @submit.prevent="submit">
        <span class="text-primary">guest@jofftiquez.dev <span>{{currentDate}}</span><span class="text-secondary"> ~/ $</span></span>
        <input
          v-model="inputModel"
          autocomplete="off"
          id="prompt-input"
          ref="inputRef"
          type="text"
        />
        <button type="submit" class="absolute left-[-1000px]"/>
      </form>
    </div>
  </div>
</template>

<script>
import { useHead } from '#app';
import { onMounted, ref } from 'vue';
import { definePageMeta } from '#imports';
import { format } from 'date-fns';
import { useRouter } from 'vue-router';
import {
  PROXY_EMAIL,
  COMMAND_HELP,
  COMMAND_GO_GITHUB,
  COMMAND_GO_STACKOVERFLOW,
  COMMAND_GO_BLOG,
  COMMAND_GO_LINKEDIN,
  COMMAND_GO_TWITTER,
  COMMAND_GO_BENTO,
  COMMAND_CONTACT,
  COMMAND_CLEAR,
  COMMAND_PRETTY_MODE,
  SOCIAL_LINKS_NAMES,
  SOCIAL_LINKS,
} from '~/constants';
import ogBanner from '../assets/images/og-banner.png';

export default {
  setup () {
    definePageMeta({
      layout: 'blank',
    });

    useHead({
      title: 'Joff Tiquez',
      description: 'Web Developer from Philippines',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: ogBanner,
        },
      ],
    });

    const router = useRouter();

    const inputRef = ref(null);
    const inputModel = ref('');
    const currentDate = ref(getCurrentDate());
    const outputList = ref([]);

    const availableCommands = [
      COMMAND_HELP,
      COMMAND_GO_GITHUB,
      COMMAND_GO_STACKOVERFLOW,
      COMMAND_GO_BLOG,
      COMMAND_GO_LINKEDIN,
      COMMAND_GO_TWITTER,
      COMMAND_GO_BENTO,
      COMMAND_CONTACT,
      COMMAND_CLEAR,
      COMMAND_PRETTY_MODE,
    ];

    const goCommands = [
      COMMAND_GO_GITHUB,
      COMMAND_GO_STACKOVERFLOW,
      COMMAND_GO_BLOG,
      COMMAND_GO_LINKEDIN,
      COMMAND_GO_TWITTER,
      COMMAND_GO_BENTO,
    ];

    onMounted(() => {
      inputRef.value.focus();
    });

    function submit () {
      // scroll to bottom
      setTimeout(() => {
        const output = document.getElementById('terminal');
        output.scrollTop = output.scrollHeight;
      }, 0);
      const commandInput = inputModel.value;
      const commandObject = {
        commandInput,
        date: currentDate.value,
      };

      if (!availableCommands.includes(commandInput)) {
        commandObject.html = `<p class="text-red-500">Command ${commandInput} not found. Type '--help' to see available commands.</p>`;
        outputList.value.push(commandObject);
        currentDate.value = getCurrentDate();
        inputModel.value = '';
        return;
      }

      if (commandInput === COMMAND_HELP) {
        commandObject.html = `
          <div>
            <div class="mb-4">
              <p>Syntax: <code>&lt;command&gt;</code> <code>&lt;options&gt;</code></p>
              <p>Commands: <b>go</b>, <b>contact</b>, <b>clear</b>, <b>gui</b></p>
            </div>

            <div class="mb-4">
              <p>The <b>go</b> command - Visit a specific link about me.</p>
              <p class="indent-3">Usage: go <code>&lt;option&gt;</code></p>
              <p class="indent-3">Options: ${SOCIAL_LINKS_NAMES.join(', ')}</p>
            </div>

            <div class="mb-4">
              <p>The contact command - Contact me.</p>
              <p class="indent-3">Usage: <b>contact</b></p>
            </div>

            <div class="mb-4">
              <p>The <b>clear</b> command - Clear the terminal.</p>
              <p class="indent-3">Usage: <b>clear</b></p>
            </div>

            <div class="mb-4">
              <p>The <b>gui</b> command - Switch to GUI mode.</p>
              <p class="indent-3">Usage: <b>gui</b></p>
            </div>
          </div>
        `;
      }

      for (const goCommand of goCommands) {
        console.warn('test', goCommand);
        if (commandInput === goCommand) {
          const [, command] = commandInput.split(' '); // go github -> [go, github]
          const link = SOCIAL_LINKS.find((link) => link.name === command);
          commandObject.html = `<p>Opening <a href="${link.url}" target="_blank" class="underline">${link.url}</a>...</p>`;
          window.open(link.url, '_blank');
          console.warn('link found, should break', link.url);
          break;
        }
      }

      if (commandInput === COMMAND_CONTACT) {
        commandObject.html = `<p>Send me an email at <a href="mailto:${PROXY_EMAIL}" class="underline">${PROXY_EMAIL}</a>`;
      }

      if (commandInput === COMMAND_CLEAR) {
        inputModel.value = '';
        outputList.value = [];
        return;
      }

      if (commandInput === COMMAND_PRETTY_MODE) {
        router.push('/gui');
        return;
      }

      outputList.value.push(commandObject);
      currentDate.value = getCurrentDate();
      inputModel.value = '';
    }

    function getCurrentDate () {
      return format(new Date(), 'EEE MMM dd HH:mm:ss');
    }

    function clickOnWrapper () {
      inputRef.value.focus();
    }

    return {
      submit,
      currentDate,
      clickOnWrapper,
      inputRef,
      outputList,
      inputModel,
    };
  },
};
</script>

<style scoped>
#prompt-input {
  background: transparent;
  margin-bottom: 2px;
  width: 300px;
  border: none;
  outline: none;
  color: #fff;
  font-size: 1rem;
  padding-left: 10px;
}
</style>
