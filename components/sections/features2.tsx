"use client";

import React from 'react';
import { Card } from '@/components/ui/card';
import { Box, LineChart, Settings, Trophy, Globe2, HeadphonesIcon, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const features = [
  {
    title: "Aider",
    description: "Especializado en primeros auxilios, RCP, seguridad contra incendios y formación en respuesta a desastres para fomentar una cultura de seguridad.",
    image: { src: '/aider-canada.png', width: 30, height: 30 }, // Reduced size
  },
  {
    title: "ACES",
    description: "Ofrece planes de gestión de crisis, evaluaciones de riesgos y sistemas personalizados de respuesta a emergencias.",
    image: { src: '/aces.png', width: 30, height: 30 }, // Reduced size
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

export default function Features() {
  return (
    <section className="py-12 px-4" style={{ backgroundColor: '#F6F8F7' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-500 font-medium mb-4 inline-block">Certificaciones</span>
          <h2 className="text-4xl font-bold mb-4">
            Mejorando la Seguridad <br /> y la Preparaci&#xF3;n  
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto">
            En Primera Intervenci&#xF3;n, nos asociamos con Aider Emergency Training Center y ACES para ofrecer soluciones de formaci&#xF3;n en emergencias y gesti&#xF3;n de crisis de vanguardia.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          {features.map((feature, index) => (
            <div key={index} className="flex justify-center">
              <FeatureCard
                title={feature.title}
                description={feature.description}
                index={index}
                image={feature.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
