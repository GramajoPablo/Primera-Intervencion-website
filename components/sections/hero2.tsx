'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="w-full  bg-[#F6F8F7]">
      {/* Background image container with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/header-image.jpeg"
          alt="Background"
          className="w-full h-full object-cover  min-h-[80vh]"
        />
        <div className="absolute inset-0 bg-[#231b75]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-1 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Badge */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-2"
          >
            <img src="/PI-Logo.png" alt="Logo" className="w-36" />
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white"
          >
            Consultora en
            Prevención de Riesgos
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="text-gray-200 text-base sm:text-lg"
          >
            Nuestra empresa se especializa en ofrecer soluciones integrales para la
            gestión de riesgos, garantizando la protección y el desarrollo estratégico
            de su organización.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button 
              whileHover={{ x: 5, backgroundColor: '#22c55e' }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium flex items-center gap-2"
            >
              Whatsapp
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ x: 5, backgroundColor: '#3215a5eb' }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-blue-950 border-white text-white rounded-lg font-medium flex items-center gap-2"
            >
              Capacitaciones
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;