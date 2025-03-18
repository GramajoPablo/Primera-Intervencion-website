"use client";

import React from 'react';
import { Box, LineChart, Settings, Trophy, Globe2, HeadphonesIcon, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Catalyzer",
      category: "CATEGORY",
      imageSrc: "https://dummyimage.com/720x400",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      views: "1.2K",
      comments: 6,
    },
    {
      title: "The 400 Blows",
      category: "CATEGORY",
      imageSrc: "https://dummyimage.com/721x401",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      views: "1.2K",
      comments: 6,
    },
    {
      title: "Shooting Stars",
      category: "CATEGORY",
      imageSrc: "https://dummyimage.com/722x402",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      views: "1.2K",
      comments: 6,
    },
  ];

  interface FeatureCardProps {
    title: string;
    description: string;
    index: number;
    image: { src: string; width: number; height: number };
  }

  const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, index, image }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ scale: 1.02 }}
      className="p-8 rounded-lg flex flex-col items-center justify-center text-center max-w-md"
    >
      <Image src={image.src} alt={title} width={image.width} height={image.height} className="w-40 h-40 mb-6" /> {/* Adjusted size */}
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );

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
          </motion.div>
        </div>

        <div className="flex flex-wrap -m-4 text-gray-600">
          {blogPosts.map((post, index) => (
            <div key={index} className="p-4 md:w-1/3 mb-16">
              <div className="h-full  border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                {/* Use next/image for optimized images */}
                <Image
                  src={post.imageSrc}
                  alt={post.title}
                  width={720}
                  height={400}
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                />
                <div className="p-6 ">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{post.category}</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{post.title}</h1>
                  <p className="leading-relaxed mb-3">{post.description}</p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>{post.views}
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>{post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;