import React from "react";
import { motion } from "framer-motion";
import carbonImage from "../assets/carbon-credit.png";
// Replace with your own carbon image later

const CarbonCreditAdvisory = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="py-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          Carbon Credit Advisory
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-gray-600 max-w-2xl mx-auto"
        >
          Helping businesses achieve sustainability and unlock carbon value
          through strategic carbon management and renewable energy advisory
          services.
        </motion.p>

        <img
          src="/src/assets/carbon-credit.png"
          alt="Carbon"
          style={{
            width: "600px",
            display: "block",
            margin: "30px auto",
          }}
        />
      </section>

      {/* Content Section */}
      <section className="px-6 max-w-5xl mx-auto space-y-12 pb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            Helping Businesses Achieve Sustainability and Unlock Carbon Value
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Energy Exchange Origin supports industries in identifying carbon
            reduction opportunities, evaluating carbon credit potential, and
            navigating renewable energy and sustainability markets. Our team
            helps organizations reduce their carbon footprint while enhancing
            environmental compliance and ESG performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>

          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Carbon Footprint Assessment</li>
            <li>Carbon Credit Opportunity Analysis</li>
            <li>Renewable Energy & Green Power Advisory</li>
            <li>ESG & Sustainability Support</li>
            <li>REC and Green Energy Solutions</li>
            <li>Net-Zero Strategy Consulting</li>
            <li>Carbon Market Guidance</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>

          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Reduce Environmental Impact</li>
            <li>Strengthen ESG Performance</li>
            <li>Support Sustainability Goals</li>
            <li>Enhance Corporate Reputation</li>
            <li>Explore Carbon Revenue Opportunities</li>
            <li>Accelerate Net-Zero Commitments</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-center">
            Build a Sustainable Future
          </h2>

          <p className="text-center mt-4 text-gray-700 max-w-3xl mx-auto">
            Partner with <strong>EEX ORIGIN</strong> to identify carbon
            reduction opportunities, improve ESG performance, achieve
            sustainability goals, and unlock long-term value through expert
            carbon credit advisory services.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default CarbonCreditAdvisory;
