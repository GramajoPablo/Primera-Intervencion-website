import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

// Using the project ID from environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'em8rmxtf';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'Primera Intervencion Blog',
  
  projectId,
  dataset,
  
  plugins: [deskTool(), visionTool()],
  
  schema: {
    types: schemaTypes,
  },
});
