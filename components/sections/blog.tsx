"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import { getRecentPosts } from '@/lib/api';

// Sample fallback data for development
const fallbackPosts = [
  {
    _id: '1',
    title: "Primeros auxilios en caso de quemaduras",
    slug: { current: "primeros-auxilios-quemaduras" },
    description: "Aprende cómo actuar correctamente ante una quemadura para minimizar el daño y acelerar la recuperación.",
    categories: [{ title: "Primeros Auxilios" }],
    publishedAt: new Date().toISOString(),
    author: { name: "Dr. Martínez" }
  },
  {
    _id: '2',
    title: "¿Cómo realizar RCP correctamente?",
    slug: { current: "como-realizar-rcp" },
    description: "Guía completa sobre la técnica de reanimación cardiopulmonar, un conocimiento que puede salvar vidas.",
    categories: [{ title: "Técnicas" }],
    publishedAt: new Date().toISOString(),
    author: { name: "Dra. González" }
  },
  {
    _id: '3',
    title: "Kit básico de primeros auxilios",
    slug: { current: "kit-basico-primeros-auxilios" },
    description: "Todo lo que necesitas incluir en tu kit de primeros auxilios para estar preparado ante emergencias.",
    categories: [{ title: "Equipamiento" }],
    publishedAt: new Date().toISOString(),
    author: { name: "Lic. Rodríguez" }
  }
];

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getRecentPosts(3);
        // If we get empty posts or there's an error, use fallback data
        if (posts && posts.length > 0) {
          setBlogPosts(posts);
        } else {
          console.log("No posts found, using fallback data");
          setBlogPosts(fallbackPosts);
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setError("Error loading posts. Using sample data instead.");
        setBlogPosts(fallbackPosts);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Helper function to safely get image URL
  const getImageUrl = (image: any) => {
    try {
      if (!image) return null;
      return urlFor(image).width(720).height(400).url();
    } catch (error) {
      console.error("Error generating image URL:", error);
      return null;
    }
  };

  return (
    <section className="text-black body-font mx-12">
      <div className="max-w-7xl mx-auto">
        {/* Blog Posts Container */}
        <div className="container px-5 py-4 mx-auto"> {/* Adjusted py-6 to py-4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center m-10" // Adjusted mb-16 to mb-24
          >
            <span className="text-green-500 font-medium mb-1 inline-block">BLOG</span>
            <h2 className="text-4xl font-bold">
              Mirá nuestras notas  
            </h2>
            {error && <p className="text-yellow-600 mt-2">{error}</p>}
          </motion.div>
        </div>

        <div className="flex flex-wrap -m-4 text-gray-600">
          {isLoading ? (
            // Loading state
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="p-4 md:w-1/3 mb-16">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <div className="lg:h-48 md:h-36 w-full bg-gray-200 animate-pulse"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-3 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))
          ) : blogPosts.length > 0 ? (
            blogPosts.map((post, index) => (
              <div key={post._id} className="p-4 md:w-1/3 mb-16">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  {post.mainImage ? (
                    <Image
                      src={getImageUrl(post.mainImage) || `https://dummyimage.com/720x400/e0e0e0/333333&text=Primera+Intervención`}
                      alt={post.title}
                      width={720}
                      height={400}
                      className="lg:h-48 md:h-36 w-full object-cover object-center"
                    />
                  ) : (
                    <div className="lg:h-48 md:h-36 w-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Primera Intervención</span>
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {post.categories && post.categories.length > 0 
                        ? post.categories[0].title 
                        : "CATEGORÍA"}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{post.title}</h1>
                    <p className="leading-relaxed mb-3">{post.description}</p>
                    <div className="flex items-center flex-wrap">
                      <Link href={`/blog/${post.slug.current}`} className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Leer más
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        {post.publishedAt && new Date(post.publishedAt).toLocaleDateString('es-AR', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                      {post.author && (
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                          {post.author.name}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full text-center py-10">
              <p>No hay publicaciones disponibles en este momento.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;