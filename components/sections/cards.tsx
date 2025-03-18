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
      image: "/Extinción de Incendios.jpeg",
      url: "",
    },
    {
      title: "Formación de Brigadistas",
      description:
        "Capacitación integral para la formación de brigadistas de emergencia, enfocándose en prevención, control y mitigación de riesgos.",
      image: "/Formación de Brigadistas .jpeg",
      url: "",
    },
   
    {
      title: "Gestión Estratégica de Equipos",
      description:
        "Aprende estrategias clave para liderar, coordinar y optimizar equipos, mejorando la comunicación y el desempeño grupal.",
      image: "/Reanimación Cardiopulmonar y uso del DEA.jpg",
      url: "",
    },
  ];

  return (
    <section className="py-2 px-4 md:px-6 lg:px-8" style={{ backgroundColor: '#F6F8F7' }}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 ">
            Servicios
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto">
            Nuestra consultora en prevención de riesgos laborales te ayudará a <br />
            identificar, evaluar y controlar los riesgos en tu empresa.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {courses.map((course, index) => (
            <div key={index} className="w-full mb-4">
              <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
                <a className="block focus:outline-none focus-visible:ring-2" href={course.url}>
                  <figure className="relative h-0 pb-[40%] overflow-hidden"> {/* Reduced padding-bottom */}
                    <Image
                      className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                      src={course.image}
                      alt="Course"
                      layout="fill"
                      priority
                    />
                  </figure>
                </a>
                <div className="flex-grow flex flex-col p-5">
                  <div className="flex-grow">
                    <header className="mb-3">
                      <a className="block focus:outline-none focus-visible:ring-2" href={course.url}>
                        <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">
                          {course.title}
                        </h3>
                      </a>
                    </header>
                    <div className="mb-8">
                      <p>{course.description}</p>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <a
                      className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500"
                      href={course.url}
                    >
                      Ver más
                    </a>
                    <a
                      className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-blue-950 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white"
                      href={course.url}
                    >
                      Reservar
                    </a>
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

export default CourseCard;

