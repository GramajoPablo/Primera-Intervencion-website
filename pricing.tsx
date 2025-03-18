"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "19",
      description: "Customize your business journey suite",
      features: [
        "Basic HR features to manage employee information and attendance.",
        "Suitable for organizations with a limited number of employees.",
      ],
      priceDetail: "/ per month"
    },
    {
      name: "Pro",
      price: "49",
      description: "Customize your business journey suite",
      features: [
        "Basic HR features to manage employee information and attendance.",
        "Suitable for organizations with a limited number of employees.",
      ],
      popular: true,
      priceDetail: "/ per month"
    },
    {
      name: "Team",
      price: "109",
      description: "Customize your business journey suite",
      features: [
        "Basic HR features to manage employee information and attendance.",
        "Suitable for organizations with a limited number of employees.",
      ],
      priceDetail: "+ $10$ per user per month"
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gray-100 rounded-full px-4 py-1 mb-4">
            <span className="text-emerald-500 mr-2">♦</span>
            Our Pricing
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Streamline Your Work With <br /> Ease.{" "}
            <span className="text-emerald-500">Start For Free.</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Customize your business journey effortlessly with Youflow's dashboard, 
            backed by a suite of powerful tools at your fingertips.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`p-8 h-full ${plan.popular ? 'bg-emerald-500 text-white' : 'bg-gray-50'}`}>
                {plan.popular && (
                  <span className="bg-white text-emerald-500 text-sm font-medium px-4 py-1 rounded-full absolute -top-3 right-8">
                    Most popular
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-6">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-gray-400">$</span>
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className={`ml-2 ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                      {plan.priceDetail}
                    </span>
                  </div>
                  <p className={`mt-4 ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                </div>
                <Button
                  className="w-full mb-8"
                  variant={plan.popular ? "secondary" : "outline"}
                >
                  Get lifetime access
                </Button>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className={`${plan.popular ? 'text-white' : 'text-emerald-500'}`}>→</span>
                      <span className={plan.popular ? 'text-white/80' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}