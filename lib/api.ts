import { sanityClient } from './sanity';

// Define types for the API responses
export interface Author {
  name: string;
  image?: any;
  bio?: string;
}

export interface Category {
  title: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  mainImage?: any;
  body?: any[];
  categories?: Category[];
  publishedAt: string;
  author?: Author;
}

export async function getAllPosts(): Promise<Post[]> {
  const posts = await sanityClient.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      description,
      mainImage,
      categories[]->{
        title
      },
      publishedAt,
      author->{
        name,
        image
      }
    }
  `);
  
  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = await sanityClient.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      body,
      description,
      mainImage,
      categories[]->{
        title
      },
      publishedAt,
      author->{
        name,
        image,
        bio
      }
    }
  `, { slug });
  
  return post;
}

export async function getRecentPosts(limit = 3): Promise<Post[]> {
  const posts = await sanityClient.fetch(`
    *[_type == "post"] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      slug,
      description,
      mainImage,
      categories[]->{
        title
      },
      publishedAt,
      author->{
        name,
        image
      }
    }
  `, { limit: limit - 1 });
  
  return posts;
}
