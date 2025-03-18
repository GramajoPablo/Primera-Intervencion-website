import { sanityClient } from './sanity';

export async function getAllPosts() {
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

export async function getPostBySlug(slug: string) {
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

export async function getRecentPosts(limit = 3) {
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
