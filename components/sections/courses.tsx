"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

// 1. TypeScript Type Safety Improvement
type Course = {
  title: string;
  description: string;
  longDescription: string;
  image: string;
};

const coursesData: Course[] = [
  {
    title: "Primeros Socorros",
    description: "RCP, manejo de fracturas, heridas y quemaduras.",
    longDescription: "Este curso completo cubre todos los aspectos esenciales de los primeros auxilios, incluyendo la reanimación cardiopulmonar (RCP), la evaluación de la escena de un accidente, la respuesta a lesiones comunes y graves, y el manejo adecuado de fracturas, heridas y quemaduras para estabilizar a la víctima hasta la llegada de ayuda profesional.",
    image: "/Primeros-Socorros.jpg",
  },
  {
    title: "Extinción de Incendios",
    description: "Técnicas y estrategias para la extinción efectiva de incendios.",
    longDescription: "Un curso especializado que proporciona a los participantes las técnicas y estrategias necesarias para la extinción efectiva de incendios. Se abordan diferentes tipos de fuego, el uso correcto de extintores y equipos de protección, y los protocolos de seguridad para actuar en diversos escenarios, desde oficinas hasta entornos industriales.",
    image: "/Extincio--n-de-Incendios.jpeg",
  },
  {
    title: "Formación de Brigadistas",
    description: "Capacitación integral para brigadistas de emergencia.",
    longDescription: "Programa de capacitación integral diseñado para formar brigadistas de emergencia altamente competentes. El curso se enfoca en la prevención, el control y la mitigación de riesgos, preparando a los equipos para responder de manera eficiente y coordinada ante cualquier situación de emergencia, minimizando daños y protegiendo vidas.",
    image: "/Formacio--n-de-Brigadistas-.jpeg",
  },
  {
    title: "Gestión de Equipos",
    description: "Liderazgo, coordinación y optimización de equipos.",
    longDescription: "Aprende las estrategias clave para liderar, coordinar y optimizar equipos de trabajo. Este curso está enfocado en mejorar la comunicación interpersonal, la resolución de conflictos y el fomento de un ambiente colaborativo, resultando en un notable incremento del desempeño y la productividad grupal.",
    image: "/practicing-cpr-first-aid.jpg",
  },
];

// 2. Component Refactoring: CourseCard sub-component
const CourseCard = ({ course, index }: { course: Course; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white rounded-xl shadow-md overflow-hidden md:flex md:h-64 group transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
    >
      <div className="md:w-1/2 relative h-48 md:h-full">
        <Image
          className="absolute h-full w-full object-cover"
          src={course.image}
          alt={course.title}
          layout="fill"
        />
      </div>
      <div className="md:w-1/2 p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-blue-950 mb-2">{course.title}</h3>
          <p className="text-gray-600 mb-4">{course.description}</p>
        </div>
        <div className="flex justify-end space-x-3 mt-4">
          <CourseModal course={course} />
          <a
            className="font-semibold text-sm inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md leading-5 shadow-sm transition duration-150 ease-in-out bg-blue-950 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-white"
            href="#"
          >
            Reservar
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// 3. Radix UI Integration: Modal for course details
const CourseModal = ({ course }: { course: Course }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="font-semibold text-sm inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md leading-5 shadow-sm transition duration-150 ease-in-out bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-gray-700">
        Ver más
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0 z-40" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-8 shadow-lg focus:outline-none z-50">
        <Dialog.Title className="text-3xl font-bold text-blue-950 m-0 mb-4">
          {course.title}
        </Dialog.Title>
        <div className="relative h-56 mb-6 rounded-lg overflow-hidden">
            <Image src={course.image} layout="fill" objectFit="cover" alt={course.title} />
        </div>
        <Dialog.Description className="text-gray-700 text-lg leading-relaxed">
          {course.longDescription}
        </Dialog.Description>
        <div className="flex mt-8 justify-end">
          <a
            className="font-semibold text-sm inline-flex items-center justify-center px-5 py-3 border border-transparent rounded-md leading-5 shadow-sm transition duration-150 ease-in-out bg-blue-950 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-white"
            href="#"
          >
            Reservar Ahora
          </a>
        </div>
        <Dialog.Close asChild>
          <button className="text-gray-500 hover:text-gray-800 absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none">
            <Cross2Icon className="h-5 w-5" />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

const Courses = () => {
  return (
    <section id="capacitaciones-modernas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-blue-950 mb-4">
            Nuestras Capacitaciones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Programas de formación diseñados para potenciar la seguridad y la eficiencia en tu entorno laboral.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {coursesData.map((course, index) => (
            <CourseCard key={course.title} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

