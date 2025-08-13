import { WordPressPosts, WordPressPost } from './types';

const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
const GRAPHQL_URL = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL;

// Test function to verify GraphQL connection
export async function testGraphQLConnection() {
  if (!GRAPHQL_URL) {
    throw new Error(
      'NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL is not defined. Please add it to your .env.local file'
    );
  }

  try {
    const response = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query TestConnection {
            generalSettings {
              title
              url
            }
          }
        `,
      }),
    });

    const text = await response.text();
    console.log('Raw response:', text);
    
    try {
      const json = JSON.parse(text);
      console.log('Parsed response:', json);
      return json;
    } catch (e) {
      console.error('Failed to parse response as JSON:', text);
      throw new Error('Invalid JSON response');
    }
  } catch (error) {
    console.error('GraphQL connection test failed:', error);
    throw error;
  }
}

export async function fetchAPI(query: string, { variables }: { variables?: any } = {}) {
  if (!GRAPHQL_URL) {
    throw new Error(
      'NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL is not defined. Please add it to your .env.local file'
    );
  }

  try {
    const headers = { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    
    const res = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('GraphQL Response Error:', {
        status: res.status,
        statusText: res.statusText,
        body: text
      });
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const text = await res.text();
    try {
      const json = JSON.parse(text);
      if (json.errors) {
        console.error('GraphQL Errors:', json.errors);
        throw new Error('GraphQL response contains errors');
      }
      return json.data;
    } catch (e) {
      console.error('JSON Parse Error:', e);
      console.error('Response Text:', text);
      throw new Error('Failed to parse JSON response');
    }
  } catch (error) {
    console.error('GraphQL Request Error:', error);
    throw error;
  }
}

export async function getAllPosts(): Promise<WordPressPosts> {
  const data = await fetchAPI(`
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            id
            date
            title
            slug
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  const data = await fetchAPI(`
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        id
        date
        title
        content
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  `, {
    variables: {
      id: slug,
      idType: 'SLUG'
    }
  });
  return data?.post || null;
}

export async function getAllCategories() {
  const data = await fetchAPI(`
    query AllCategories {
      categories {
        edges {
          node {
            id
            name
            slug
          }
        }
      }
    }
  `);
  return data?.categories;
} 