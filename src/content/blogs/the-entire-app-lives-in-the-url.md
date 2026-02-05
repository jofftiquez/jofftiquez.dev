---
title: "The Entire App Lives in the URL: Building Static Notes"
description: "I built an LLM agent orchestrator and needed something to test it on. The result was a zero-backend note app I actually liked enough to ship."
date: 2026-02-05
author: "Joff Tiquez"
category: "Web Development"
tags: ["javascript", "open source", "ai", "url-encoding", "side-project"]
image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200"
readingTime: 5
draft: false
---

# The Entire App Lives in the URL: Building Static Notes

I've been building an SDLC agent orchestrator on top of Claude. Think of it as two AI agents working together: one handles planning and discovery (breaking down requirements, identifying edge cases, structuring the approach), and the other handles execution (writing the actual code, iterating on implementation). I wanted to see how far I could push this workflow, so I needed a small project to test it on.

Static Notes was that test. And honestly? I liked the output enough to actually publish it.

## Quick Disclaimer

Encoding data in URLs isn't new. Developers have been stuffing state into URL fragments for years, from shareable CodePen configs to collaborative diagram tools. The technique is well-documented. I didn't invent anything here. I just wanted a simple, self-contained project to throw at my agent workflow and see what comes out the other end.

## The Problem It Solves

Every note-sharing app follows the same playbook: spin up a server, provision a database, implement authentication, handle storage costs, worry about uptime. All this infrastructure just to share a few paragraphs of text.

Static Notes skips all of that. The note _is_ the link.

## How It Works

URLs can carry data. The fragment (everything after `#`) never leaves your browser, it's not even sent to the server. This makes it perfect for client-side-only apps.

The flow is simple:

- User types a note
- Compress the content with **lz-string**
- Encode it into the URL hash
- Share the URL, recipient's browser decodes and displays

No server. No database. No accounts.

```
https://notes.jofftiquez.dev/#XQAAAAIFAAAAAAAAAABBqQjm...
                              └── your entire note, compressed
```

Here's a real example you can click right now: [notes.jofftiquez.dev/#N4IgLi...](https://notes.jofftiquez.dev/#N4IgLiBcICoBYEsDOACZKCGKwFMlgEIQAaEAYyhAAkcAbWge2O0VXS13wJQBkGGA1igCuABxY4ATjgkoAJhjBZ0CAHazhk2gQBkqgEZJRAbkAU5CAC+QA)

And here's basically all the code that matters:

```js
// Encode
const compressed = LZString.compressToEncodedURIComponent(noteContent);
window.location.hash = compressed;

// Decode
const hash = window.location.hash.slice(1);
const note = LZString.decompressFromEncodedURIComponent(hash);
```

[lz-string](https://github.com/pieroxy/lz-string) handles the heavy lifting. Shoutout to **pieroxy** for this library, it's been around for years and it just works. A 1,000-character note might compress to around 400 characters in the URL.

## The Constraints (and Why They're Fine)

**URL length limits are real:**

- **Under 2,000 chars** — universally safe
- **2,000 to 8,000 chars** — works in browsers, but some apps truncate
- **Over 8,000 chars** — you're hitting browser limits

But hey, this isn't meant to replace Google Docs. It's for quick snippets, temporary shares, meeting notes you'll discard tomorrow.

**No persistence is intentional.** Close the tab, lose the note (unless you saved the URL). This ephemerality is actually useful for sensitive content.

**Offline-first by default.** After the first load, the entire app is cached. Works on airplanes, in basements, anywhere.

## One File, Zero Dependencies

The entire app is one `index.html`, about 50KB with everything inlined:

- Editor using native `contenteditable`
- Rich text (bold/italic) that survives encoding
- QR code generation for mobile sharing
- Dark mode that follows system preference
- Zero external dependencies at runtime

You can save the HTML file to your desktop and it works forever. No build step, no `node_modules`, no deployment pipeline.

## Beyond Notes: The Pattern

This "URL as database" pattern works for any small, shareable state:

- **Diagrams** — encode Mermaid syntax
- **Configs** — share environment setups
- **Checklists** — collaborative todos
- **Code snippets** — syntax-highlighted pastes
- **Forms** — schema-in-URL, responses stay local

The URL length constraint becomes a _forcing function_ for focused, single-purpose tools.

## About the AI Workflow

The reason I'm sharing this isn't really about the app itself. It's about how it was built. Static Notes went from idea to deployed product in a single session using my agent orchestrator. The entire codebase, HTML, CSS, JavaScript, compression logic, QR generation, all produced by this planning-then-execution workflow.

Is it perfect? No. But it's functional, it's shippable, and I genuinely use it. That's a pretty good signal for what AI-assisted development can do when you structure the workflow right.

I'll probably write more about the orchestrator itself soon. For now, Static Notes is proof that the approach works.

## Try It

**Live:** [notes.jofftiquez.dev](https://notes.jofftiquez.dev)

**Source:** [github.com/jofftiquez/static-notes](https://github.com/jofftiquez/static-notes)

Write something, copy the URL, share it. That's the whole product.

---