import React from "react";
import { motion } from "framer-motion";
import testImage from "../assets/long new.png";
import image1 from "../assets/medium.png";
import image2 from "../assets/image5.jpeg";
import image3 from "../assets/RPO.png";

const LongTermPPA = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="py-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          Long Term Power Purchase Agreements (PPA)
        </motion.h1>

       


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-gray-600 max-w-2xl mx-auto"
        >
          We specialize in structuring long-term PPAs that provide stability and
          savings for energy buyers, ensuring consistent pricing and supply over
          extended periods.
        </motion.p>

        <motion.img
  src={testImage}
  alt="Long Term PPA"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  whileHover={{ scale: 1.05, rotate: 1 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="mx-auto mt-6 w-[568px] h-[379px] object-cover rounded-2xl border-4 border-gradient-to-r from-green-400 via-blue-500 to-purple-600 shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] transition-all duration-500"
/>

      </section>

      <section className="px-6 max-w-5xl mx-auto space-y-12 pb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-2">
            Secure your energy future with long-term stability and sustainability.
          </h2>
          <p>
            At <strong>EEX ORIGIN</strong>, we specialize in structuring and
            managing Long-Term Power Purchase Agreements (PPAs) that provide
            predictable pricing, reliable energy supply, and support for clean
            energy goals over 10 to 25 years.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-2">What is a Long-Term PPA?</h3>
          <p>
            A Long-Term PPA is a contractual agreement between a power generator
            and a buyer (corporate, utility, or government) to supply electricity
            over an extended period—typically 10 to 25 years. These agreements
            are vital for securing project financing, managing energy costs, and
            achieving long-term sustainability targets.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Our Long-Term PPA Services Include:</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Contract Design & Negotiation:</strong> Structuring terms
              that align with your business strategy and risk profile.
            </li>
            <li>
              <strong>Renewable Integration:</strong> Solar, wind, hydro, or hybrid
              solutions backed by clean energy assets.
            </li>
            <li>
              <strong>Price Certainty:</strong> Fixed or partially indexed pricing
              models to hedge against future market fluctuations.
            </li>
            <li>
              <strong>Bankable Agreements:</strong> PPA structures designed to
              support project financing and investment-grade standards.
            </li>
            <li>
              <strong>Performance Monitoring:</strong> Continuous tracking and
              reporting of energy generation and delivery.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Who Benefits from Long-Term PPAs?</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Corporate Buyers:</strong> Reduce carbon footprint, fix
              long-term energy costs, and meet ESG targets.
            </li>
            <li>
              <strong>Utilities:</strong> Lock in stable supply sources and meet
              renewable purchase obligations.
            </li>
            <li>
              <strong>IPPs and Developers:</strong> Secure revenue streams to
              support capital-intensive energy projects.
            </li>
            <li>
              <strong>Government Entities:</strong> Procure power under stable,
              long-term frameworks with minimal risk.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Why Partner with EEX ORIGIN?</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Deep Industry Experience:</strong> Proven track record in
              executing long-term energy contracts.
            </li>
            <li>
              <strong>Tailored Solutions:</strong> Each PPA is designed to match
              your energy demand, budget, and sustainability roadmap.
            </li>
            <li>
              <strong>End-to-End Management:</strong> From feasibility to final
              settlement, we handle the full PPA lifecycle.
            </li>
            <li>
              <strong>Green Energy Leadership:</strong> Support the global energy
              transition with reliable clean power.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mt-12 text-center">
            Plan Today for a Sustainable Tomorrow
          </h2>
          <p className="text-center mt-4">
            Partner with <strong>EEX ORIGIN</strong> to lock in reliable,
            cost-effective, and clean energy for the long run.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default LongTermPPA;
