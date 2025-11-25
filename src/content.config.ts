// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const blog = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/BlogPosts",
    }),
    schema: z.object({
        title: z.string(),
        date: z.string(),
        excerpt: z.string(),
        tags: z.array(z.string()),
        url: z.string().url(),
        publisher: z.string(),
        authors: z.array(z.string()),
    }),
});

const talks = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/Talks",
    }),
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.string(),
        summary: z.string(),
        tags: z.array(z.string()),
        abstract_url: z.string().optional(),
        recording_url: z.string().url().optional(),
        slides_url: z.string().optional(),
        speaker_image: image().optional(),
        speaker_image_alt: z.string().optional(),
        publisher: z.string(),
        location: z.string(),
    })
})
// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog, talks };
