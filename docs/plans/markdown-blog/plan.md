# Morgoth Spec: Markdown Blog Feature

**Tier**: Medium (Spec)
**Session**: markdown-blog
**Created**: 2026-02-04
**Status**: Approved

---

## 1. Overview

Add a markdown-based blog system to jofftiquez.dev with:
- `/blogs` - Blog listing page with filterable cards
- `/blogs/:slug` - Individual blog post pages
- 100% static markdown files (no server/database)
- SEO optimized with proper meta tags and sitemap integration

---

## 2. Problem Statement

**Problem**: Need a place to publish and share written content
**Users**:
- End users (visitors reading blog posts)
- Search engines (crawlers indexing content)
- Author (commits markdown files directly to repo)

---

## 3. Success Criteria

- [ ] `/blogs` route displays all blog posts as visual cards
- [ ] `/blogs/:slug` route renders individual markdown posts
- [ ] Markdown files in `content/blogs/` are automatically discovered
- [ ] Posts are filterable by tags and categories
- [ ] All pages have proper SEO meta tags (title, description, OG, Twitter)
- [ ] Posts appear in sitemap automatically
- [ ] Table of contents auto-generated from headings
- [ ] Reading time displayed on each post
- [ ] Share buttons functional (Twitter, LinkedIn, Copy link)
- [ ] Blog accessible via navbar and terminal command
- [ ] Cover images display correctly (Unsplash URLs)

---

## 4. Technical Approach

**Framework**: Nuxt Content (@nuxt/content module)

### Why Nuxt Content?
- Native Nuxt 3 integration
- Built-in markdown parsing with frontmatter
- Query API for filtering/sorting
- Auto-generates routes from file structure
- SEO helpers built-in
- Works with existing sitemap module (`strictNuxtContentPaths: true`)

---

## 5. Frontmatter Schema

```yaml
---
title: "My Blog Post Title"
description: "A short description for SEO and previews"
date: 2026-02-04
author: "Joff Tiquez"
category: "Development"
tags: ["vue", "nuxt", "tutorial"]
image: "https://images.unsplash.com/photo-xxx"
readingTime: 5
---
```

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | string | Yes | Post title |
| description | string | Yes | SEO description / excerpt |
| date | date | Yes | Publication date |
| author | string | No | Author name (defaults to site owner) |
| category | string | Yes | Single category for grouping |
| tags | string[] | No | Array of tags for filtering |
| image | string | No | Cover image URL (Unsplash) |
| readingTime | number | No | Reading time in minutes (auto-calculated if not set) |

---

## 6. Requirements

### Must Have (P0)
- [ ] Install and configure @nuxt/content module
- [ ] Create `/src/content/blogs/` directory for markdown files
- [ ] Create `/src/pages/blogs/index.vue` - blog listing page
- [ ] Create `/src/pages/blogs/[slug].vue` - blog post page
- [ ] Visual cards with cover images on listing page
- [ ] Proper SEO meta tags on all blog pages
- [ ] Responsive design (mobile-first)
- [ ] Navigation: Add blog link to navbar
- [ ] Navigation: Add terminal command for blog

### Should Have (P1)
- [ ] Filter by tags (clickable tag chips)
- [ ] Filter by category (dropdown or chips)
- [ ] Auto-generated table of contents
- [ ] Reading time calculation and display
- [ ] Share buttons (Twitter, LinkedIn, Copy link)

### Nice to Have (P2)
- [ ] Syntax highlighting for code blocks
- [ ] Previous/Next post navigation
- [ ] Related posts section

---

## 7. Tasks

### Task 1: Setup @nuxt/content
**Description**: Install and configure the Nuxt Content module
**Files**:
- `package.json`
- `nuxt.config.js`

**Acceptance Criteria**:
- [ ] @nuxt/content installed via pnpm
- [ ] Module registered in nuxt.config.js
- [ ] Content directory configured as `src/content`

---

### Task 2: Create Content Directory Structure
**Description**: Set up the content directory with a sample blog post
**Files**:
- `src/content/blogs/` (new directory)
- `src/content/blogs/hello-world.md` (sample post)

**Acceptance Criteria**:
- [ ] Directory structure created
- [ ] Sample post with all frontmatter fields
- [ ] Post renders correctly when accessed

---

### Task 3: Create Blog Listing Page
**Description**: Build the `/blogs` route with filterable card grid
**Files**:
- `src/pages/blogs/index.vue` (new)
- `src/components/blog/BlogCard.vue` (new)
- `src/components/blog/BlogFilters.vue` (new)

**Acceptance Criteria**:
- [ ] Displays all blog posts as cards
- [ ] Cards show: cover image, title, date, category, tags, excerpt
- [ ] Filter by tags works
- [ ] Filter by category works
- [ ] Posts sorted by date (newest first)
- [ ] Responsive grid layout
- [ ] SEO meta tags set (useSeoMeta)
- [ ] Page meta defined (definePageMeta with order: 4)

---

### Task 4: Create Blog Post Page
**Description**: Build the `/blogs/:slug` route for individual posts
**Files**:
- `src/pages/blogs/[slug].vue` (new)
- `src/components/blog/BlogToc.vue` (new)
- `src/components/blog/BlogShare.vue` (new)
- `src/components/blog/BlogMeta.vue` (new)

**Acceptance Criteria**:
- [ ] Renders markdown content with prose styling
- [ ] Displays cover image as hero
- [ ] Shows title, date, author, category, tags
- [ ] Reading time displayed
- [ ] Table of contents generated from headings
- [ ] Share buttons functional
- [ ] SEO meta tags dynamic from frontmatter
- [ ] OG image set from cover image
- [ ] 404 handling for invalid slugs

---

### Task 5: Update Navigation
**Description**: Add blog to site navigation
**Files**:
- `src/layouts/Default.vue`
- `src/constants/index.js`

**Acceptance Criteria**:
- [ ] "Blog" link added to navbar
- [ ] Terminal command `blogs` added to constants
- [ ] Consistent with existing navigation patterns

---

### Task 6: Styling & Polish
**Description**: Ensure consistent styling with site design
**Files**:
- `src/assets/css/tailwind.css` (if needed)
- Various component files

**Acceptance Criteria**:
- [ ] Uses Tailwind CSS + DaisyUI consistently
- [ ] Prose styling applied via @tailwindcss/typography
- [ ] Dark mode support (if applicable)
- [ ] Accessibility: proper heading structure, alt text, focus states
- [ ] Animations consistent with site (AOS if used)

---

### Task 7: Testing & Verification
**Description**: Verify all functionality works correctly
**Files**: N/A (manual + automated testing)

**Acceptance Criteria**:
- [ ] All routes accessible
- [ ] SEO tags verified (view source / meta inspector)
- [ ] Sitemap includes blog posts
- [ ] Mobile responsive verified
- [ ] Links work correctly
- [ ] Filters work correctly
- [ ] Share buttons work

---

## 8. File Structure (After Implementation)

```
src/
├── content/
│   └── blogs/
│       ├── hello-world.md
│       └── ... (future posts)
├── pages/
│   ├── blogs/
│   │   ├── index.vue        # Blog listing
│   │   └── [slug].vue       # Blog post
│   └── ... (existing pages)
├── components/
│   ├── blog/
│   │   ├── BlogCard.vue     # Post card for listing
│   │   ├── BlogFilters.vue  # Tag/category filters
│   │   ├── BlogToc.vue      # Table of contents
│   │   ├── BlogShare.vue    # Share buttons
│   │   └── BlogMeta.vue     # Author, date, reading time
│   └── commons/
│       └── GenericPanel.vue (existing)
└── constants/
    └── index.js             # Add blog command
```

---

## 9. SEO Implementation

### Blog Listing Page (`/blogs`)
```js
useSeoMeta({
  title: 'Blog | Joff Tiquez',
  description: 'Articles about web development, Vue.js, Nuxt, and software engineering.',
  ogTitle: 'Blog | Joff Tiquez',
  ogDescription: 'Articles about web development, Vue.js, Nuxt, and software engineering.',
  ogImage: '/og-blog.png', // Create default OG image
  twitterCard: 'summary_large_image',
})
```

### Individual Post (`/blogs/:slug`)
```js
useSeoMeta({
  title: () => `${post.title} | Joff Tiquez`,
  description: () => post.description,
  ogTitle: () => post.title,
  ogDescription: () => post.description,
  ogImage: () => post.image || '/og-blog.png',
  ogType: 'article',
  articlePublishedTime: () => post.date,
  articleAuthor: () => post.author,
  articleTag: () => post.tags,
  twitterCard: 'summary_large_image',
})
```

---

## 10. Test Requirements

### Unit Tests
- [ ] BlogCard component renders correctly
- [ ] BlogFilters component filters work
- [ ] Reading time calculation utility

### Integration Tests
- [ ] `/blogs` route loads and displays posts
- [ ] `/blogs/:slug` route loads correct post
- [ ] Filtering updates displayed posts
- [ ] SEO meta tags are correct

### Manual Verification
- [ ] Visual inspection on desktop/mobile
- [ ] Lighthouse SEO audit
- [ ] Social media preview testing (Twitter/LinkedIn cards)
- [ ] Sitemap verification

---

## 11. Dependencies to Add

```json
{
  "@nuxt/content": "^2.x"
}
```

Note: @tailwindcss/typography is already installed.

---

## 12. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Content module version conflict | Build fails | Pin to stable version, test locally first |
| Large images slow page load | Poor UX | Use Unsplash optimization params, lazy loading |
| SEO not indexed | Low visibility | Submit sitemap to Google Search Console |

---

## Approval

**Review this plan and respond with:**
- **Approve** - Proceed with implementation
- **Revise** - Loop back with specific changes
- **Questions** - Ask clarifying questions

