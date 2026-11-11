import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'
import { glob } from 'astro/loaders'

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    disciplines: z.array(z.enum(['software', 'object', 'sound', 'image', 'print'])),
    /** Position on the homepage, lowest first */
    order: z.number(),
  }),
})

export const collections = { projects }
