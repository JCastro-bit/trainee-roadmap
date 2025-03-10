// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// Define el esquema para la colección de proyectos
const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    phase: z.number().int().min(1).max(4),
    period: z.string(),
    level: z.string(),
    technologies: z.array(z.string()),
    coverImage: z.string().optional(),
    layout: z.string(),
  }),
});

// Exporta las colecciones
export const collections = {
  'projects': projectsCollection,
};