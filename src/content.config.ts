import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
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
