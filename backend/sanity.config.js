import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Examen_2024',

  projectId: '6eb75d40',
  dataset: 'examen_2024',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
