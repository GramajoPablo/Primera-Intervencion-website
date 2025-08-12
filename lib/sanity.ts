import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Using the project ID from environment variables
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'em8rmxtf';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiToken = process.env.NEXT_PUBLIC_SANITY_API_TOKEN;

export const config = {
  dataset,
  projectId,
  apiVersion: '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production',
  token: apiToken,
};

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

// Set up a helper function for generating Image URLs with only the asset reference data in your documents
const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
