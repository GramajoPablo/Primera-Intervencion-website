 "use client";


import React from 'react';
import { Card } from '@/components/ui/card';
import { Box, LineChart, Settings, Trophy, Globe2, HeadphonesIcon, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Prevención",
    description: "Identificamos y mitigamos riesgos potenciales para proteger su negocio y personas.",
    icon: Box,
  },
  {
    title: "Asesoramiento Técnico",
    description: "Soluciones personalizadas basadas en análisis exhaustivos y estándares de seguridad.",
    icon: Settings,
  },
  {
    title: "Instrucción",
    description: "Formación práctica y especializada para garantizar una respuesta eficaz en situaciones críticas.",
    icon: Trophy,
  },
  
];

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon, index }) => (
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
    className="bg-white p-8 rounded-lg shadow-sm"
  >
    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6">
      <div className="w-6 h-6 text-green-500">
        <Icon />
      </div>
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export default function Features() {
  return (
    <section className="py-16 px-4 " style={{ backgroundColor: '#111827' }}>
      <div className="max-w-7xl mx-auto ">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}