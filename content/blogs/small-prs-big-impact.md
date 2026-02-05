---
title: "Small PRs, Big Impact"
description: "Even the tiniest PR can make a huge difference. Here's why small open source contributions are valuable, with real examples from my 7+ years of contributing."
date: 2023-06-30
author: "Joff Tiquez"
category: "Open Source"
tags: ["open-source", "contributions", "pull-requests", "community", "github"]
image: "https://blog.ossph.org/content/images/size/w2000/2023/06/IMG_6498-1024x628.jpg"
readingTime: 8
draft: false
---

# Small PRs, Big Impact

When you're new to open source, a question that often comes up is, "How big should my first PR be?" It's a valid question, and actually quite crucial if you want to contribute to open source projects. You might be wondering why this question is so important. Well, as the title suggests, even small contributions matter, but not everyone talks about it or realizes its significance. It seems like a simple question with a straightforward answer, right?

And yes, it is. But let me explain why. I think sharing real-life examples not only makes it more believable but also more personal. Most tutorials and articles these days lack that personal touch, so I want to address this topic based on my own experiences.

## How Small or Big Can a PR Get?

First things first, let's understand the difference between a small and a large pull request (PR). Generally, a large PR involves making extensive modifications across multiple files, sometimes even introducing major changes that can disrupt the project. Project maintainers don't usually prefer these kinds of PRs because they are difficult to review and have the potential to destabilize the project. I want to make it clear that large PRs do happen, but they are relatively rare compared to the multitude of small PRs.

Now, let's talk about small PRs. Unlike large PRs, small ones are much easier to handle. They are quick to read and understand since they have less impact on the codebase. However, don't underestimate the potential of a small PR. Depending on its purpose, it can have a significant impact on how a documentation, website, or even a piece of code functions. So, even though they may seem minor, small PRs can actually make a big difference.

Let me provide you with a few examples of common small PRs that you might come across:

- **Documentation changes** - Making improvements or clarifications to the project's documentation.
- **Spelling correction** - Fixing typos or misspelled words in code comments, documentation, or error messages.
- **Code formatting** - Ensuring consistent and clean code formatting, such as indentations, line breaks, and spacing.
- **Basic bug fixes** - Addressing simple issues or bugs in the code that have straightforward solutions.
- **Grammar correction** - Fixing grammatical errors or improving the readability of comments or documentation.
- **And more** - There are numerous other small PRs that can be valuable, such as refactoring redundant code, improving variable names, optimizing performance, or adding simple tests.

These kinds of PRs are super important for any project, especially the ones with lots of docs. It's tough to keep everything updated when projects change or add new features, so mistakes and inconsistencies happen a lot. But for the folks who put in tons of hours to create free and open source projects, even the tiniest contribution means a lot. Seriously, even a little dot or a space can be a big help. It's a way for us users of open source stuff to show some love and support to the projects we use. When we actively get involved and make things better, we're helping these projects succeed and thrive.

## My Personal Experiences

I've been involved in the open source community for over 7 years now, both as a maintainer and contributor. Throughout these years, I've made numerous PRs to well-known tech giants like Stripe, Vue.js, Angular, Firebase, daily.dev, Quasar Framework, and more. I want to share some of the notable small contributions I've made to these projects. Most of them involve documentation updates and minor bug fixes, just to show you that this is a real thing. Even small acts of help like these are greatly appreciated by maintainers of large open source projects.

### Vue.js

Documentation changes. I submitted PRs to [VitePress](https://github.com/vuejs/vitepress/pull/1868) updating nesting examples and [cleaning up formatting](https://github.com/vuejs/vitepress/pull/1847) like removing unnecessary dots after "Step" labels. Small? Yes. But it makes the docs cleaner for every developer reading them.

### Stripe

Stripe.js library documentation improvements. I [updated their README](https://github.com/stripe/stripe-js/pull/129) to add yarn usage instructions and various code formatting fixes. I also [cleaned up their Travis CI config](https://github.com/stripe/stripe-js/pull/131) by removing an unnecessary `run` keyword in their script invocations.

### Nuxt.js

Documentation update. I [submitted a PR](https://github.com/nuxt/nuxt/pull/19634) to mention the config file name before the code block example because it disappears whenever you hover over the code block, which makes it confusing for beginners.

### Firebase

Functions example bug fix. I [fixed a catch block](https://github.com/firebase/functions-samples/pull/396) for `req.cookie` because the previous code would fail if no Authorization was set in the header. A small fix, but it saved people from a real headache.

### Daily.dev

Documentation changes and grammar improvements. I submitted [minor grammar updates](https://github.com/dailydotdev/apps/pull/1803) to their README. And this one's a bit funny because it's literally just an [emoji change](https://github.com/dailydotdev/daily/pull/893). I swapped 🥂 for 🍻 because, ya know, I think beer is more appropriate for programmers than champagne. But hey, it got merged! 🤣

### Angular

Typo correction. Just a [little typo fix](https://github.com/angular/angularfire/pull/1016) in AngularFire. Simple as that.

### Quasar Framework

Typo correction and documentation update. I fixed a [typo changing "ia" to "is"](https://github.com/quasarframework/quasar/pull/13519) and also [added a warning about manifest v3](https://github.com/quasarframework/quasar/pull/13528) support being implemented in Vite-only setup to avoid misunderstanding.

### Nativescript Vue

Documentation update. I [improved the explanation](https://github.com/nativescript-vue/nativescript-vue.org/pull/210) for the `selectedIndexChange` event because the docs didn't include how to get the index from the event object. Had to explicitly add it.

### Capacitor

Documentation update. Changed ["not support" to "not supported"](https://github.com/capacitor-community/stripe/pull/180) to make it grammatically correct. That's it. One word.

### DaisyUI

Multiple contributions here. I [added the Nuxtwind Daisy starter](https://github.com/saadeghi/daisyui/pull/1891) to their list, [updated the default meta image](https://github.com/saadeghi/daisyui/pull/1890) from version 2.0 to 3.0, and [made the medium button size explicitly documented](https://github.com/saadeghi/daisyui/pull/1838) in the button sizes section.

And many more! 😄

## Closing Remarks

As you can see, most of these are documentation changes and it's okay. They are small, easy to review, and add great value to the project. Some might say that these are just small changes and bigger PRs are better. Don't pay attention to them. The true value in open source is the collaboration no matter how small or big your contributions are. So next time you see a typo or misspelled words or minor grammar correction, go for it, fork the project and submit a PR!

Happy open sourcing! 🚀

---

_Joff Tiquez, hailing from Manila, Philippines 🇵🇭, is the founder of [OSSPH](https://ossph.org). He is a web developer who strongly supports open source and has been maintaining projects like [Vue Stripe](https://vuestripe.com) for an extended period. To get in touch with Joff, visit [https://bento.me/jofftiquez](https://bento.me/jofftiquez)._