import React from "react";
import { motion } from "framer-motion";

const ShortTermPPA = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800"
        >
          Short Term Energy Trading
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-gray-600 max-w-2xl mx-auto"
        >
          We facilitate short-term power trading to meet real-time demands, offering agile solutions to manage surplus or deficit energy with dynamic market access.
        </motion.p>
      </section>
    </div>
  );
};

export default ShortTermPPA;
