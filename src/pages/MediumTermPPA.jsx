import React from "react";
import { motion } from "framer-motion";

const MediumTermPPA = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="py-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          Medium Term Power Purchase Agreements (PPA)
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-gray-600 max-w-2xl mx-auto"
        >
          Our medium-term PPAs provide the flexibility and reliability required
          for mid-range strategic energy planning, balancing risk and price
          security.
        </motion.p>
      </section>

      <section className="px-6 max-w-5xl mx-auto space-y-12 pb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-2">
            Flexible energy contracts tailored for evolving business needs.
          </h2>
          <p>
            At <span className="font-bold">EEX ORIGIN</span>, we offer
            customized Medium-Term Power Purchase Agreements (PPAs) ranging from
            3 to 10 years, giving energy buyers and producers the perfect
            balance between long-term stability and short-term flexibility.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-2">
            What is a Medium-Term PPA?
          </h3>
          <p>
            A Medium-Term PPA is a contractual agreement between an energy
            producer and a buyer to purchase electricity for a fixed or indexed
            price over a medium-duration period (typically 3–10 years). These
            contracts are ideal for businesses looking for stable pricing
            without being locked into long-term commitments.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Our Services Include:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Contract Structuring:</strong> Tailored PPA terms based on
              your load profile, technology, and risk appetite.
            </li>
            <li>
              <strong>Price Hedging:</strong> Protect against market volatility
              with fixed or indexed pricing models.
            </li>
            <li>
              <strong>Flexible Tenure:</strong> Choose contract durations that
              align with your business cycles or project phases.
            </li>
            <li>
              <strong>Regulatory Guidance:</strong> Navigate policy and
              compliance requirements with ease.
            </li>
            <li>
              <strong>Portfolio Management:</strong> Combine PPAs with
              short-term trading or green certificates for optimized returns.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Who is it for?</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Corporate Buyers (data centers, manufacturers, commercial buildings)</li>
            <li>Independent Power Producers (IPPs)</li>
            <li>Distribution Utilities</li>
            <li>Green Energy Investors</li>
            <li>ESCOs and Aggregators</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Why Choose EEX ORIGIN?</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Market Expertise:</strong> Deep understanding of regional
              and global energy markets.
            </li>
            <li>
              <strong>End-to-End Support:</strong> From negotiation to
              settlement, we manage the full PPA lifecycle.
            </li>
            <li>
              <strong>Green Alignment:</strong> Source clean energy and meet
              your ESG goals through renewable PPAs.
            </li>
            <li>
              <strong>Risk Optimization:</strong> Balance supply-demand with
              smart contract strategies.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mt-12 text-center">
            Let’s Power Your Next Move
          </h2>
          <p className="text-center mt-4">
            Whether you're buying or selling energy, our medium-term PPAs help
            you lock in value while staying agile in a rapidly changing energy
            landscape.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default MediumTermPPA;
