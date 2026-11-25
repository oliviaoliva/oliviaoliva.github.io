import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Projetos pessoais: um arquivo .md por projeto em src/content/projects/
const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.number(),
    status: z.enum(['live', 'wip', 'research', 'idea']).default('wip'),
    tags: z.array(z.string()).default([]),
    links: z
      .object({
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
      })
      .default({}),
    order: z.number().default(100), // menor = aparece primeiro
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
