"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What should be the perfect duration for a COACH Appointment session?",
      answer: "The ideal duration for a coaching session is typically 45-60 minutes. This allows enough time for meaningful discussion while maintaining focus and energy.",
    },
    {
      question: "How much is the base budget for an Architect appointment?",
      answer: "Base budgets for architect appointments vary but typically start at $150-200 per hour. Complex projects may require higher budgets.",
    },
    {
      question: "How do I get the fees fixed?",
      answer: "Fees are fixed based on project scope, complexity, and duration. Contact our team for a detailed quote tailored to your needs.",
    },
    {
      question: "Can I get my 4th year old appointment rebooked in a modern style?",
      answer: "Yes, we offer appointment rebooking and modernization services. Our team will help update your existing appointment to match current standards.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}