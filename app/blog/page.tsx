import { getAllPosts } from '@/lib/api';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/ui/navigation';
import { Footer } from '@/components/footer';

// Sample fallback posts for development
const fallbackPosts = [
  {
    _id: '1',
    title: "Primeros auxilios en caso de quemaduras",
    slug: { current: "primeros-auxilios-quemaduras" },
    description: "Aprende cómo actuar correctamente ante una quemadura para minimizar el daño y acelerar la recuperación.",
    categories: [{ title: "Primeros Auxilios" }],
    publishedAt: new Date().toISOString(),
    author: { 
      name: "Dr. Martínez",
      image: null
    }
  },
  {
    _id: '2',
    title: "¿Cómo realizar RCP correctamente?",
    slug: { current: "como-realizar-rcp" },
    description: "Guía completa sobre la técnica de reanimación cardiopulmonar, un conocimiento que puede salvar vidas.",
    categories: [{ title: "Técnicas" }],
    publishedAt: new Date().toISOString(),
    author: { 
      name: "Dra. González",
      image: null
    }
  },
  {
    _id: '3',
    title: "Kit básico de primeros auxilios",
    slug: { current: "kit-basico-primeros-auxilios" },
    description: "Todo lo que necesitas incluir en tu kit de primeros auxilios para estar preparado ante emergencias.",
    categories: [{ title: "Equipamiento" }],
    publishedAt: new Date().toISOString(),
    author: { 
      name: "Lic. Rodríguez",
      image: null
    }
  },
  {
    _id: '4',
    title: "Cómo actuar ante un accidente de tráfico",
    slug: { current: "como-actuar-accidente-trafico" },
    description: "Guía paso a paso sobre cómo proceder de manera segura y efectiva cuando te encuentras con un accidente de tráfico.",
    categories: [{ title: "Emergencias" }],
    publishedAt: new Date().toISOString(),
    author: { 
      name: "Dr. Fernández",
      image: null
    }
  },
  {
    _id: '5',
    title: "Primeros auxilios para niños: lo que todo padre debe saber",
    slug: { current: "primeros-auxilios-ninos" },
    description: "Técnicas y consejos específicos para atender emergencias médicas en niños pequeños.",
    categories: [{ title: "Pediatría" }],
    publishedAt: new Date().toISOString(),
    author: { 
      name: "Dra. López",
      image: null
    }
  },
  {
    _id: '6',
    title: "Cómo identificar y tratar un ataque cardíaco",
    slug: { current: "identificar-tratar-ataque-cardiaco" },
    description: "Aprende a reconocer los signos de un ataque cardíaco y qué hacer en los primeros minutos críticos.",
    categories: [{ title: "Cardiología" }],
    publishedAt: new Date().toISOString(),
    author: { 
      name: "Dr. Sánchez",
      image: null
    }
  }
];

// Helper function to safely get image URL
const getImageUrl = (image: any) => {
  try {
    if (!image) return null;
    return urlFor(image).width(800).height(500).url();
  } catch (error) {
    console.error("Error generating image URL:", error);
    return null;
  }
};

export default async function BlogPage() {
  let posts;
  let errorMessage = null;
  
  try {
    posts = await getAllPosts();
    
    // If no posts are found, use fallback for development
    if (!posts || posts.length === 0) {
      console.warn("No posts found. Using fallback posts.");
      posts = fallbackPosts;
      
      if (process.env.NODE_ENV === 'development') {
        errorMessage = "No se encontraron publicaciones en Sanity. Mostrando datos de ejemplo.";
      }
    }
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    posts = fallbackPosts;
    
    if (process.env.NODE_ENV === 'development') {
      errorMessage = "Error al cargar publicaciones desde Sanity. Mostrando datos de ejemplo.";
    }
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Artículos, noticias y recursos sobre primeros auxilios y atención médica de emergencia
          </p>
          {errorMessage && (
            <div className="mt-4 p-3 bg-yellow-100 text-yellow-800 rounded-md inline-block">
              {errorMessage}
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post: any) => (
              <article key={post._id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <Link href={`/blog/${post.slug.current}`}>
                  <div className="relative h-64 w-full">
                    {post.mainImage ? (
                      <Image
                        src={getImageUrl(post.mainImage) || `https://dummyimage.com/800x500/e0e0e0/333333&text=${encodeURIComponent(post.title)}`}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                        <span className="text-gray-500 text-center px-4">{post.title}</span>
                      </div>
                    )}
                  </div>
                </Link>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    {post.categories && post.categories.length > 0 && (
                      <span className="mr-2">{post.categories[0].title}</span>
                    )}
                    <span className="mx-2">•</span>
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('es-AR', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    <Link href={`/blog/${post.slug.current}`} className="hover:text-blue-500 transition-colors duration-200">
                      {post.title}
                    </Link>
                  </h2>
                  
                  {post.description && (
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>
                  )}
                  
                  <div className="flex items-center justify-between">
                    {post.author && (
                      <div className="flex items-center">
                        {post.author.image ? (
                          <Image
                            src={getImageUrl(post.author.image) || "https://dummyimage.com/40x40/e0e0e0/333333"}
                            alt={post.author.name}
                            width={40}
                            height={40}
                            className="rounded-full mr-2"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gray-200 mr-2 flex items-center justify-center">
                            <span className="text-gray-500 text-xs">{post.author.name.charAt(0)}</span>
                          </div>
                        )}
                        <span className="text-sm text-gray-700">{post.author.name}</span>
                      </div>
                    )}
                    
                    <Link href={`/blog/${post.slug.current}`} className="text-blue-500 hover:text-blue-700 text-sm font-medium inline-flex items-center">
                      Leer más
                      <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 text-lg">No hay publicaciones disponibles en este momento.</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
