import { getPostBySlug, getAllPosts, Post, Author, Category } from '@/lib/api';
import { urlFor } from '@/lib/sanity';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import Navigation from '@/components/ui/navigation';
import { Footer } from '@/components/footer';

// Using the Post interface imported from api.ts
type BlogPost = Post;

// Sample fallback post for development
const fallbackPost: BlogPost = {
  _id: '1',
  title: "Primeros auxilios en caso de quemaduras",
  slug: { current: "primeros-auxilios-quemaduras" },
  description: "Aprende cómo actuar correctamente ante una quemadura para minimizar el daño y acelerar la recuperación.",
  categories: [{ title: "Primeros Auxilios" }],
  publishedAt: new Date().toISOString(),
  author: { 
    name: "Dr. Martínez",
    image: null
  },
  body: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Este es un artículo de ejemplo para mostrar cómo se vería un post del blog. Cuando conectes tu proyecto de Sanity.io, este contenido será reemplazado con el contenido real de tu CMS.'
        }
      ]
    },
    {
      _type: 'block',
      style: 'h2',
      children: [
        {
          _type: 'span',
          text: '¿Qué hacer en caso de quemaduras?'
        }
      ]
    },
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'Las quemaduras son lesiones en los tejidos del cuerpo causadas por el calor, la electricidad, productos químicos, fricción o radiación. Dependiendo de la gravedad, pueden clasificarse en primer, segundo o tercer grado.'
        }
      ]
    }
  ]
};

// This function generates the static paths for all blog posts
export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();
    
    if (!posts || posts.length === 0) {
      console.warn("No posts found for generateStaticParams");
      return [{ slug: "primeros-auxilios-quemaduras" }];
    }
    
    return posts.map((post: BlogPost) => ({
      slug: post.slug.current,
    }));
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [{ slug: "primeros-auxilios-quemaduras" }];
  }
}

// Helper function to safely get image URL
const getImageUrl = (image: any) => {
  try {
    if (!image) return null;
    return urlFor(image).url();
  } catch (error) {
    console.error("Error generating image URL:", error);
    return null;
  }
};

// Components for the PortableText renderer
const components = {
  types: {
    image: ({ value }: any) => {
      const imageUrl = getImageUrl(value);
      return (
        <div className="relative w-full h-96 my-8">
          <Image
            src={imageUrl || "https://dummyimage.com/1200x600/e0e0e0/333333&text=Primera+Intervención"}
            alt={value?.alt || 'Blog post image'}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-xl font-bold mt-4 mb-2">{children}</h4>,
    normal: ({ children }: any) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-green-500 pl-4 italic my-6">{children}</blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <Link href={value.href} rel={rel} className="text-blue-500 hover:underline">
          {children}
        </Link>
      );
    },
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-5 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="mb-1">{children}</li>,
    number: ({ children }: any) => <li className="mb-1">{children}</li>,
  },
};

export default async function BlogPost({ params }: { params: { slug: string } }) {
  let post: BlogPost | null = null;
  
  try {
    post = await getPostBySlug(params.slug);
    
    // If no post is found, use fallback for development or show 404
    if (!post) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Post with slug "${params.slug}" not found. Using fallback post.`);
        post = fallbackPost;
      } else {
        return notFound();
      }
    }
  } catch (error) {
    console.error(`Error fetching post with slug "${params.slug}":`, error);
    
    if (process.env.NODE_ENV === 'development') {
      console.warn("Using fallback post due to error");
      post = fallbackPost;
    } else {
      return notFound();
    }
  }

  // At this point, post should never be null because we either have a real post,
  // a fallback post in development, or we've called notFound() in production
  if (!post) {
    return notFound();
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            {post.categories?.map((category: Category, index: number) => (
              <span key={index} className="mr-2">
                {category.title}
                {index < (post?.categories?.length ?? 0) - 1 && ", "}
              </span>
            ))}
            <span className="mx-2">•</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('es-AR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })}
            </time>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          {post.description && (
            <p className="text-xl text-gray-600 mb-6">{post.description}</p>
          )}
          
          {post.author && (
            <div className="flex items-center">
              {post.author.image ? (
                <div className="mr-3">
                  <Image
                    src={getImageUrl(post.author.image) || "https://dummyimage.com/40x40/e0e0e0/333333"}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              ) : null}
              <div>
                <p className="text-gray-900 font-medium">{post.author.name}</p>
              </div>
            </div>
          )}
        </header>

        {post.mainImage && (
          <div className="relative w-full h-[400px] md:h-[500px] mb-12">
            <Image
              src={getImageUrl(post.mainImage) || "https://dummyimage.com/1200x600/e0e0e0/333333&text=Primera+Intervención"}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          {post.body && <PortableText value={post.body} components={components} />}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog" className="text-blue-500 hover:text-blue-700 inline-flex items-center">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5"></path>
              <path d="M12 19l-7-7 7-7"></path>
            </svg>
            Volver al blog
          </Link>
        </div>
      </article>
      
      <Footer />
    </main>
  );
}
