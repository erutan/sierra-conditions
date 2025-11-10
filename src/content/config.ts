import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    sidebar: z.string().optional().default('sierra'),
  }),
});

export const collections = {
  pages: pagesCollection,
};
