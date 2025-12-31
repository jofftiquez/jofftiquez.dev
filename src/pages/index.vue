<template>
  <main
    id="main-content"
    role="application"
    aria-label="Interactive terminal interface"
    class="p-4 text-white bg-base-200 h-full overflow-auto"
    @click="clickOnWrapper"
  >
    <!-- Accessibility: Hidden heading structure for screen readers -->
    <h1 class="sr-only">Joff Tiquez - Terminal Interface</h1>

    <!-- Welcome section -->
    <section id="greetings" aria-labelledby="greeting-heading" class="mb-3">
      <h2 id="greeting-heading" class="sr-only">Welcome Message</h2>
      <p>Hi, I'm Joff <span class="text-purple-500" aria-label="heart">&lt;3</span> Welcome!</p>
      <p>Type 'help' to see available commands.</p>
      <p>If you are not familiar with command line you can switch to <nuxt-link to="/gui" class="underline" aria-label="Switch to graphical user interface mode">gui mode</nuxt-link>.</p>
    </section>

    <!-- Command output area with live region for screen readers -->
    <section id="output" role="log" aria-live="polite" aria-label="Command output history">
      <h2 class="sr-only">Command History</h2>
      <template v-for="(output, index) in outputList" :key="index">
        <div class="command-entry">
          <span class="text-primary">
            <span aria-hidden="true">guest@jofftiquez.dev</span>
            <span class="sr-only">Command executed at</span>
            <time :datetime="output.isoDate">{{output.date}}</time>
            <span class="text-secondary" aria-hidden="true"> ~/ <span class="text-white">$</span></span>
            <span class="text-white" aria-label="Command entered">&nbsp;{{output.commandInput}}</span>
          </span>
          <div v-html="output.html" role="status"/>
        </div>
      </template>
    </section>

    <!-- Command input area -->
    <section id="command" aria-labelledby="command-heading">
      <h2 id="command-heading" class="sr-only">Command Input</h2>
      <form @submit.prevent="submit" role="search" aria-label="Terminal command input">
        <label for="prompt-input" class="sr-only">
          Enter terminal command. Type 'help' for available commands. Press Enter to execute.
        </label>
        <span class="text-primary" aria-hidden="true">
          guest@jofftiquez.dev <span>{{currentDate}}</span>
          <span class="text-secondary"> ~/ <span class="text-white">$</span></span>
        </span>
        <input
          v-model="inputModel"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
          id="prompt-input"
          ref="inputRef"
          type="text"
          aria-describedby="terminal-help"
        />
        <button type="submit" class="sr-only">Execute command</button>
      </form>
      <!-- Help text for screen readers -->
      <p id="terminal-help" class="sr-only">
        Use keyboard shortcuts: Ctrl+L to clear terminal. Available commands: help, ls, go, contact, clear, gui.
      </p>
    </section>

    <!-- Status announcements for screen readers -->
    <div
      role="status"
      aria-live="assertive"
      aria-atomic="true"
      class="sr-only"
    >
      {{ announcement }}
    </div>
  </main>
</template>

<script>
import { definePageMeta, useSeoMeta } from '#imports';
import { format } from 'date-fns';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const ogImage = 'https://jofftiquez.dev/og-banner.png';
import {
  PROXY_EMAIL,
  COMMAND_HELP,
  COMMAND_LS,
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

export default {
  setup () {
    definePageMeta({
      layout: 'blank',
      pageName: 'Home',
      order: 0,
    });

    const metaTitle = 'Home - Joff Tiquez';
    const metaDescription = 'Web Developer from 🇵🇭';

    useSeoMeta({
      title: metaTitle,
      ogTitle: metaTitle,
      description: metaDescription,
      ogDescription: metaDescription,
      ogImage: ogImage,
      twitterImage: ogImage,
      url: 'https://jofftiquez.dev',
      ogUrl: 'https://jofftiquez.dev',
      twitterCard: 'summary_large_image',
    });

    const router = useRouter();

    const inputRef = ref(null);
    const inputModel = ref('');
    const currentDate = ref(getCurrentDate());
    const outputList = ref([]);
    const announcement = ref('');

    const availableCommands = [
      COMMAND_HELP,
      COMMAND_LS,
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
      globalThis.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key === 'l') {
          inputModel.value = '';
          outputList.value = [];
          inputRef.value.focus();
        }
      });
    });

    function submit () {
      // scroll to bottom
      setTimeout(() => {
        const output = document.getElementById('main-content');
        output.scrollTop = output.scrollHeight;
      }, 0);

      const commandInput = inputModel.value?.trim();
      const commandObject = {
        commandInput,
        date: currentDate.value,
        isoDate: new Date().toISOString(),
      };

      // if command is empty
      // display empty prompt
      if (commandInput === '') {
        commandObject.html = '';
        outputList.value.push(commandObject);
        currentDate.value = getCurrentDate();
        inputModel.value = '';
        return;
      }

      // if command is not empty and not
      // available display error
      if (!availableCommands.includes(commandInput)) {
        commandObject.html = `<p class="text-red-500" role="alert">Command '${commandInput}' not found. Type 'help' to see available commands.</p>`;
        outputList.value.push(commandObject);
        currentDate.value = getCurrentDate();
        inputModel.value = '';
        announcement.value = `Error: Command ${commandInput} not found`;
        return;
      }

      // if command is help
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
              <p>The <b>ls</b> command - List all of the available routes.</p>
              <p class="indent-3">Usage: <b>ls</b></p>
            </div>

            <div class="mb-4">
              <p>The <b>clear</b> command - Clear the terminal.</p>
              <p class="indent-3">Usage: <b>clear</b></p>
            </div>

            <div class="mb-4">
              <p>The <b>gui</b> command - Switch to GUI mode.</p>
              <p class="indent-3">Usage: <b>gui</b></p>
            </div>
            
            <div class="mb-4">
              <p>Keyboard: <code>CTRL + L</code> - Clear the terminal.</p>
            </div>
          </div>
        `;
      }

      // if command is go iterate through goCommands
      // if command is found, open link then break
      for (const goCommand of goCommands) {
        if (commandInput === goCommand) {
          const [, command] = commandInput.split(' '); // go github -> [go, github]
          const link = SOCIAL_LINKS.find((link) => link.name === command);
          commandObject.html = `<p>Opening <a href="${link.url}" target="_blank" class="underline">${link.url}</a>...</p>`;
          window.open(link.url, '_blank');
          console.warn('link found, should break', link.url);
          break;
        }
      }

      // if command is contact display email
      if (commandInput === COMMAND_CONTACT) {
        commandObject.html = `<p>Send me an email at <a href="mailto:${PROXY_EMAIL}" class="underline">${PROXY_EMAIL}</a>`;
      }

      // if command is ls display
      // available routes
      if (commandInput === COMMAND_LS) {
        const routes = router.getRoutes();

        const mappedRoutes = routes
          .sort((a, b) => a.meta.order - b.meta.order)
          .map((route, index) => {
            return `<li>drwxr-xr-x ${index} centipede centipede <a href="${route.path}" class="underline hover:text-primary">${route.meta.pageName}</a></li>`;
          });

        commandObject.html = `
          <div>
            <ul class="list-inside">
              ${mappedRoutes.join('')}
            </ul>
          </div>
        `;
      }

      // if command is clear clear the terminal
      if (commandInput === COMMAND_CLEAR) {
        inputModel.value = '';
        outputList.value = [];
        return;
      }

      // if command is pretty mode switch to gui
      if (commandInput === COMMAND_PRETTY_MODE) {
        router.push('/gui');
        return;
      }

      outputList.value.push(commandObject);
      currentDate.value = getCurrentDate();
      inputModel.value = '';
      announcement.value = `Command ${commandInput} executed successfully`;
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
      announcement,
    };
  },
};
</script>

<style scoped>
#prompt-input {
  background: transparent;
  padding-bottom: 3px;
  width: 300px;
  border: none;
  outline: none;
  color: #fff;
  padding-left: 10px;
}
</style>
