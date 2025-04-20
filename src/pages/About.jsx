
import React from "react";
import { motion } from "framer-motion";

const About = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
  
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                className="rounded-lg shadow-xl"
                alt="Team collaboration"
               src="https://images.unsplash.com/photo-1651372381086-9861c9c81db5" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
              To drive innovation in energy trading by enabling organizations to meet procurement goals, regulatory requirements, and sustainability commitments through smart, tech-powered solutions.
              </p>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-600">
              EEX ORIGIN is a next-gen energy exchange platform empowering stakeholders across the power value chain. From renewable energy generators to large consumers and utilities, we simplify complex energy contracts and compliance through intuitive digital infrastructure.
              </p>
              <br/>
              <h2 className="text-3xl font-bold mb-6">What We Do</h2>
              
              <p className="text-gray-600">
              EEX ORIGIN is a next-gen energy exchange platform empowering stakeholders across the power value chain. From renewable energy generators to large consumers and utilities, we simplify complex energy contracts and compliance through intuitive digital infrastructure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section 
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and help us deliver the
              best possible experience for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg p-8 shadow-lg"
              >
                <div className="text-primary text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       Team Section 
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the talented individuals who make our success possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <img 
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                  alt={`${member.name} profile picture`}
                 src="https://images.unsplash.com/photo-1544212408-c711b7c19b92" />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}
    </div>
  );
};


const values = [
  {
    icon: "🎯",
    title: "Excellence",
    description: "We strive for excellence in everything we do, setting high standards and consistently meeting them.",
  },
  {
    icon: "🤝",
    title: "Integrity",
    description: "We conduct our business with honesty, transparency, and ethical practices.",
  },
  {
    icon: "💡",
    title: "Innovation",
    description: "We embrace new ideas and technologies to stay ahead of industry trends.",
  },
];

const team = [
  {
    name: "John Smith",
    role: "CEO",
  },
  {
    name: "Sarah Johnson",
    role: "Creative Director",
  },
  {
    name: "Michael Brown",
    role: "Technical Lead",
  },
  {
    name: "Emily Davis",
    role: "Marketing Manager",
  },
];

export default About;
