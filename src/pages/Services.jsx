import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import testImage from '../assets/test.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img 
                  className="w-full h-48 object-cover"
                  alt={service.title}
                  src={service.image} 
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={service.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// ✅ Updated service link destinations here
const services = [
  {
    title: "LONG TERM PPA",
    description: "Long-term energy procurement tailored for stability and savings.",
    image: testImage,
    link: "/services/ltp", // Link to Long Term PPA page
  },
  {
    title: "MEDIUM TERM PPA",
    description: "Medium-term power purchase agreements for strategic planning.",
    image: image1,
    link: "/services/mtp", // Link to Medium Term PPA page
  },
  {
    title: "SHORT TERM ENERGY TRADING",
    description: "Flexible, short-term energy trading to meet real-time demands.",
    image: image2,
    link: "/services/stp", // Link to Short Term PPA page
  },
  {
    title: "RPO OBLIGATIONS",
    description: "Assistance in meeting Renewable Purchase Obligation compliance.",
    image: image2,
    link: "/services/rpo", // Link to RPO Obligation page
  },
];

export default Services;
