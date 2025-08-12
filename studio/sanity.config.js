import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Alexandre Guimarães CMS',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '548uc9hr',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  basePath: '/studio',
  cors: {
    credentials: 'include',
    origin: ['https://www.aleguimas.com.br', 'http://localhost:3000', 'http://localhost:3333']
  },
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
