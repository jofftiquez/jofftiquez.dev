<template lang="pug">
  v-container(fluid)
    form(@submit.prevent="submit")
      v-row
        v-col(cols="12").pb-0
          p Hi, I'm Joff. Welcome!
            br
            | Type '--help' to see available commands.
            br
            | If you are not familiar with command line you can switch to #[a pretty mode].
        v-col(cols="12" v-for="(result, index) in results" :key="index").py-0
          b.terminal-user guest@jofftiquez.dev {{date | format}}
            span.terminal-directory &nbsp;~/ $&nbsp;
            span(v-if="result.success").white--text {{result.success.message}}
            span(v-if="result.error").red--text {{result.error.message}}
          template(v-if="result.help")
            p Syntax: &lt;command&gt; &lt;options&gt;
              br
              | Commands: #[b go], #[b contact], #[b clear]
            p The #[b go] command - Visit a specific link about me.
              br
              span.ml-5 Usage: #[b go] &lt;option&gt;
              br
              span.ml-5 Options: {{validOptions.map(opt => opt.id).join(', ')}}
            p The #[b contact] command - Contanct me.
              br
              span.ml-5 Usage: #[b contact]
            p The #[b clear] command - Clear the terminal.
              br
              span.ml-5 Usage: #[b clear]
        v-col(ref="scrollRef" cols="12").py-0
          b.terminal-user guest@jofftiquez.dev {{date | format}}
            span.terminal-directory &nbsp;~/ $&nbsp;
            input(ref="commandInput" v-model="command" :size="command.length" v-on-click-outside="focusInput").terminal-input
      button(type="submit").hide
</template>

<script>
import { format } from 'date-fns';
import { mixin as onClickOutside } from 'vue-on-click-outside';
export default {
  filters: {
    format (date) {
      return format(date, 'MMM. DD, YYYY HH:mm:ss');
    },
  },
  mixins: [onClickOutside],
  data () {
    return {
      date: new Date(),
      results: [],
      command: '',
      validOptions: [
        {
          id: 'github',
          link: 'https://github.com/jofftiquez',
        },
        {
          id: 'stackoverflow',
          link: 'https://stackoverflow.com/users/2889614/cent1pede',
        },
        {
          id: 'linkedin',
          link: 'https://linkedin.com/in/jofftiquez',
        },
        {
          id: 'twitter',
          link: 'https://twitter.com/jrtiquez',
        },
        {
          id: 'facebook',
          link: 'https://facebook.com/jofftiquez',
        },
        {
          id: 'cv',
          link: 'https://stackoverflow.com/cv/jofftiquez',
        },
      ],
    };
  },
  mounted () {
    this.$refs.commandInput.focus();
  },
  methods: {
    submit () {
      const result = {};
      if (!this.command) {
        return;
      }
      const commandArr = this.command.split(' ');
      const command = commandArr[0];
      commandArr.shift();
      const options = commandArr.join(' ');
      const validOption = this.validOptions.find(opt => opt.id === options);

      if (this.command === '--help') {
        result.help = true;
        this.command = '';
        this.results.push(result);
        this.$scrollTo(this.$refs.scrollRef);
        return;
      }

      if (this.command === 'clear') {
        this.results = [];
        this.command = '';
        this.$scrollTo(this.$refs.scrollRef);
        return;
      }

      if (this.command === 'contact') {
        this.results.push({
          success: {
            message: `${this.command}`,
          },
        });
        this.results.push({
          success: {
            message: 'Contact me at jofftiquez@gmail.com',
          },
        });
        this.command = '';
        this.$scrollTo(this.$refs.scrollRef);
        return;
      }

      if (command === 'go' && !!validOption) {
        window.open(validOption.link, '_blank');
        this.results.push({
          success: {
            message: `${this.command}`,
          },
        });
        this.command = '';
        this.$scrollTo(this.$refs.scrollRef);
      } else {
        this.results.push({
          success: {
            message: `${this.command}`,
          },
        });
        this.results.push({
          error: {
            message: `Error: command not found '${this.command}': type '--help'`,
          },
        });
        this.command = '';
        this.$scrollTo(this.$refs.scrollRef);
      }
    },
    focusInput () {
      this.$refs.commandInput.focus();
    },
  },
};
</script>

<style scoped>
a {
  color: white;
  text-decoration: underline;
}

.terminal-user {
  color: #8AE234;
}

.terminal-directory {
  color: #729FCF;
}

.terminal-input {
  width: auto;
  color: white;
  outline: none;
}
</style>
