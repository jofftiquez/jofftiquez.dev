---
title: "Faker.js UI: Fake Data Without the Setup"
description: "How I built a web app and Chrome extension to bring Faker.js to everyone, no npm install required."
date: 2025-12-20
author: "Joff Tiquez"
category: "Open Source"
tags: ["faker.js", "vue", "quasar", "chrome-extension", "open-source"]
image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200"
readingTime: 4
draft: false
---

# Faker.js UI: Fake Data Without the Setup

If you've used [Faker.js](https://fakerjs.dev/) before, you know how handy it is for generating realistic test data. Names, emails, addresses, phone numbers, all that good stuff. But every time I needed a quick fake email or a dummy phone number, I had to write a script, import Faker, run it, then copy the output from the terminal. It always felt like too many steps for something so simple.

So I built [Faker.js UI](https://fakerjsui.org).

## What Is Faker.js UI?

At its core, Faker.js UI is a web app and Chrome extension that puts the entire Faker.js API behind a clean, clickable interface. No terminal. No `npm install`. No writing a throwaway script just to get a fake address. You open it, you click the data type you need, and it's instantly copied to your clipboard.

That's it. One click, done.

The [web app](https://app.fakerjsui.org) covers every Faker.js method, from names and addresses to company data and finance. You click a method, it generates the data, and it's copied to your clipboard. There's also a preview so you can see what you got before pasting it somewhere.

## The Chrome Extension

The web app is handy, but the Chrome extension is where things get really interesting. It lives right in your browser's developer tools, which means you can generate fake data without ever leaving the page you're working on.

But my favorite feature? **Automatic form filling.** The extension looks at your form fields, matches them against Faker.js methods, and fills them with appropriate fake data. If it sees a field that looks like an email, it fills in a fake email. A phone field gets a phone number. A name field gets a name. For anyone who's ever manually typed "test@test.com" into the same form for the hundredth time, ya know how much time this saves.

It's available on the [Chrome Web Store](https://chrome.google.com/webstore/detail/fakerjs-ui/onahjokmphbfmdihclgeehajfnpkpaja) if you want to try it out.

## The Tech Behind It

Faker.js UI is a monorepo built with tools I know and love:

The main app and Chrome extension are built with **Quasar Framework** and **Vue 3**. I've been working with Vue for over 10 years now, and Quasar's ability to target both SPA and browser extension from the same codebase made it the obvious choice. Write once, ship to web and Chrome. The marketing website runs on **Nuxt 3** with **Tailwind CSS** and **DaisyUI** for styling.

The whole thing is managed with **pnpm workspaces**, keeping the app, extension, and website neatly organized under one roof. If you want to contribute or just poke around, the setup is straightforward:

```bash
# Clone and install
git clone https://github.com/jofftiquez/faker-js-ui.git
cd faker-js-ui
pnpm install

# Run the web app
pnpm dev:app

# Run the browser extension
pnpm dev:bex

# Run the marketing site
pnpm dev:website
```

## Bulk Generation and Export

One feature I'm particularly proud of is bulk generation. Sometimes you don't just need one fake name. You need 500 rows of user data to seed a database or stress test an API. Faker.js UI lets you generate data in bulk and export it as **JSON or CSV**, which honestly saves a ton of time when you're setting up test environments.

## Why I Built This

Honestly? I built it because I was lazy. Every project I worked on needed test data, and I kept doing the same repetitive steps. Write a quick Node script, import Faker, console.log the output, copy from terminal, paste into my app. Over and over.

But hey, that's often how the best tools start, right? You scratch your own itch, and it turns out other people have the same itch. The project has earned 201 stars on GitHub and was featured on Product Hunt, which tells me I wasn't the only one tired of that workflow.

Often that's one of the best ways to learn and build. You simply build it because you need it.

## What's Next

Faker.js UI is open source and always welcoming contributions. Whether it's adding support for new Faker.js methods, improving the UI, fixing typos in the docs, or suggesting features, every contribution matters. And I mean that. Some might say that small changes like doc fixes aren't "real" contributions. Don't pay attention to them. They are small, easy to review, and add great value to the project.

If you want to check it out, here are the links:

- **GitHub:** [github.com/jofftiquez/faker-js-ui](https://github.com/jofftiquez/faker-js-ui)
- **Web App:** [app.fakerjsui.org](https://app.fakerjsui.org)
- **Chrome Extension:** [Chrome Web Store](https://chrome.google.com/webstore/detail/fakerjs-ui/onahjokmphbfmdihclgeehajfnpkpaja)
- **Demo Video:** [YouTube](https://youtu.be/QYoqCh-wj_Q)

If you end up using it, I'd love to hear how it fits into your workflow. And if something's missing or broken, feel free to open an issue or send a PR.

Happy coding! 🚀

Thank you <3