"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 text-primary-foreground" style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url(/Primeros-Socorros.jpg)', backgroundSize: 'cover' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's Grow Your Business
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mb-8 mx-auto">
              Join thousands of satisfied customers who are already <br />using our platform to streamline their work
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="group"
              >
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Sales
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center gap-8">
            <img src="https://primeraintervencion.com.ar/wp-content/uploads/2023/10/aces.png" alt="Logo 1" className="w-36" />
            <img src="https://primeraintervencion.com.ar/wp-content/uploads/2023/10/aider-canada_.png" alt="Logo 2" className="w-36" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

