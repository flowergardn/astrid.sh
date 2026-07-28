import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    createdAt: z.coerce.date(),
    unlisted: z.boolean().optional(),
    minutesRead: z.string().optional(),
  }),
});

const project = defineCollection({
  loader: glob({ base: "./src/content/project", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    unlisted: z.boolean().optional(),
    minutesRead: z.string().optional(),
  }),
});

export const collections = { blog, project };
