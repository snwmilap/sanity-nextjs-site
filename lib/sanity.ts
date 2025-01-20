// src/lib/sanity.ts
import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: 'v2021-03-25', // Update this to your API version
});

export default sanityClient;
