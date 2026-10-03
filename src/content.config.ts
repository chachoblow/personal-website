import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    disciplines: z.array(
      z.enum(['software', 'object', 'sound', 'image', 'print']),
    ),
  }),
})

export const collections = { projects }
