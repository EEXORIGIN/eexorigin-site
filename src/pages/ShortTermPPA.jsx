import React from "react";
import { motion } from "framer-motion";
import testImage from "../assets/long new.png";
import image1 from "../assets/medium.png";
import image2 from "../assets/image5.jpeg";
import image3 from "../assets/RPO.png";


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


        <motion.img
                  src={image2}
                  alt="Long Term PPA"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mx-auto mt-6 w-[568px] h-[379px] object-cover rounded-2xl border-4 border-gradient-to-r from-green-400 via-blue-500 to-purple-600 shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-all duration-500"
                />

      </section>
    </div>
  );
};

export default ShortTermPPA;
