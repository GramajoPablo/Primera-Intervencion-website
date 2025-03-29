"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from 'framer-motion';

const CourseCard = () => {
  const [open, setOpen] = useState(true);

  const courses = [
    {
      title: "Primeros Socorros",
      description:
        "Este curso enseña primeros auxilios, evaluación de la escena, respuesta a lesiones, RCP y manejo de fracturas, heridas y quemaduras.",
      image: "/Primeros-Socorros.jpg",
      url: "",
    },
    {
      title: "Extinción de Incendios",
      description:
        "Curso especializado en técnicas y estrategias para la extinción efectiva de incendios en diversos escenarios.",
      image: "/Extincio--n-de-Incendios.jpeg",
      url: "",
    },
    {
      title: "Formación de Brigadistas",
      description:
        "Capacitación integral para la formación de brigadistas de emergencia, enfocándose en prevención, control y mitigación de riesgos.",
      image: "/Formacio--n-de-Brigadistas-.jpeg",
      url: "",
    },
   
    {
      title: "Gestión Estratégica de Equipos",
      description:
        "Aprende estrategias clave para liderar, coordinar y optimizar equipos, mejorando la comunicación y el desempeño grupal.",
      image: "/practicing-cpr-first-aid.jpg",
      url: "",
    },
  ];

  return (
    <section id="capacitaciones" className="py-16 px-4 md:px-6 lg:px-8" style={{ backgroundColor: '#F6F8F7' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-blue-950">
            Capacitaciones
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Nuestra consultora en prevención de riesgos laborales te ayudará a 
            identificar, evaluar y controlar los riesgos en tu empresa.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div 
              key={index} 
              className="w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col h-full bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
                <a className="block focus:outline-none focus-visible:ring-2" href={course.url}>
                  <figure className="relative h-0 pb-[56.25%] overflow-hidden"> {/* 16:9 aspect ratio */}
                    <Image
                      className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                      src={course.image}
                      alt={course.title}
                      layout="fill"
                      priority
                    />
                  </figure>
                </a>
                <div className="flex-grow flex flex-col p-6">
                  <div className="flex-grow">
                    <header className="mb-4">
                      <a className="block focus:outline-none focus-visible:ring-2" href={course.url}>
                        <h3 className="text-2xl text-blue-950 font-bold leading-tight">
                          {course.title}
                        </h3>
                      </a>
                    </header>
                    <div className="mb-6">
                      <p className="text-gray-600 leading-relaxed">{course.description}</p>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-3 mt-2">
                    <a
                      className="font-medium text-sm inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md leading-5 transition duration-200 ease-in-out bg-indigo-50 hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 text-indigo-600"
                      href={course.url}
                    >
                      Ver más
                    </a>
                    <a
                      className="font-medium text-sm inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md leading-5 transition duration-200 ease-in-out bg-blue-950 hover:bg-blue-900 focus:outline-none focus-visible:ring-2 text-white"
                      href={course.url}
                    >
                      Reservar
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCard;
