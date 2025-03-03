import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
    }),
});

const pub = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string(),
      authors: z.array(
        z.object({
          name: z.string(),
          url: z.string(),
        })
      ),
      published_year: z.number(),
      published_month: z.number().optional(),
      published_place: z.string(),
      bibtex: z.string(),
      links: z.array(
        z.object({
          name: z.string(),
          url: z.string(),
        })
      ),
      homepage: z.string(),
      paper_id: z.string(),
      // og_image: z.string(),
      featured: z.boolean(),
      tags: z.array(z.string()).default(["others"]),
    }),
});

export const collections = { blog, pub };