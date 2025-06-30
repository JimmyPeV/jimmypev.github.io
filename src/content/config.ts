import { defineCollection, z } from "astro:content";
// z -> zod shema

const arts = defineCollection({
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        img: image(),
        artstation: z.string(),
    }),
})

export const collections = { arts }