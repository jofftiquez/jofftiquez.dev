import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blogs: defineCollection({
      type: 'page',
      source: 'blogs/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        author: z.string().default('Joff Tiquez'),
        category: z.string(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
        readingTime: z.number().optional(),
      }),
    }),
  },
})
