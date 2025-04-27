import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import mainimage from "../assets/image1.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            alt="Modern office space with natural light"
            src={mainimage}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-6xl md:text-5xl font-bold mb-6">
              Welcome to EEXORIGIN
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Let’s shape a smarter, cleaner energy future together.
            </p>
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/Contact">
                Get Starte <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At EEX ORIGIN, We integrate cutting-edge technology with deep
              energy market knowledge to provide a secure, scalable, and
              sustainable platform for trading electricity and renewables. Our
              comprehensive support covers the entire lifecycle of PPAs, PPQs,
              and RPO tracking.
            </p>
            <br />
          </motion.div>
          <center>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
          </center>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* 
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their
              business needs.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8"
              asChild
            >
              <a href="/contact">Contact Us Today</a>
            </Button>
            */}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: (
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
        ⚡
      </div>
    ),
    title: "Action ",
    description:
      "our action propelling us forward and enabling us to create an impactful future.",
  },
  {
    icon: (
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
        💡
      </div>
    ),
    title: "Innovation",
    description: "We stay ahead of the curve with cutting-edge solutions.",
  },
  {
    icon: (
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
        🧠
      </div>
    ),
    title: "Mastery",
    description:
      "Our team brings years of industry experience to every project.",
  },
  {
    icon: (
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
        🤝
      </div>
    ),
    title: "Customer ",
    description: "24/7 dedicated support to ensure your success.",
  },
];

export default Home;
