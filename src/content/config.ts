import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    description: z.string(),
    publishDate: z.string(),
    image: z.string().optional(),
  }),
});

const hizmetlerCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    description: z.string(),
    publishDate: z.string(),
    image: z.string().optional(),
  }),
});

const bolgelerCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    description: z.string(),
    publishDate: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'hizmetler': hizmetlerCollection,
  'bolgeler': bolgelerCollection,
};