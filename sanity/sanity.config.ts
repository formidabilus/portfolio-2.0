import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {defineConfig} from 'sanity'

export default defineConfig({
  name: 'default',
  title: 'portfolio-2.0',

  projectId: 'zye5jrxg',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
