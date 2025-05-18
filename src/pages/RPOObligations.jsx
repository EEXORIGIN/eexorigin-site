import React from "react";
import { motion } from "framer-motion";
import testImage from "../assets/long new.png";
import image1 from "../assets/medium.png";
import image2 from "../assets/image5.jpeg";
import image3 from "../assets/RPO.png";

const RPOObligations = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="py-20 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          RPO Obligations
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-gray-600 max-w-2xl mx-auto"
        >
          We support organizations in meeting Renewable Purchase Obligation
          (RPO) mandates by ensuring procurement from accredited renewable
          sources and compliance reporting.
        </motion.p>

        <motion.img
          src={image3}
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
            Simplifying Renewable Purchase Obligation (RPO) compliance for your
            business
          </h2>
          <p>
            At <strong>EEX ORIGIN</strong>, we help obligated entities—such as
            distribution companies, open access consumers, and captive power
            producers—seamlessly meet their Renewable Purchase Obligation (RPO)
            targets through structured, cost-effective, and compliant solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-2">What is RPO?</h3>
          <p>
            Renewable Purchase Obligation (RPO) is a regulatory mandate by
            government authorities requiring certain entities to purchase a
            specified percentage of their total electricity consumption from
            renewable energy sources.
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-1">
            <li>
              <strong>Solar RPO</strong>
            </li>
            <li>
              <strong>Non-Solar RPO</strong> (e.g., wind, biomass)
            </li>
            <li>
              <strong>Hydro Purchase Obligation (HPO)</strong>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">
            Our RPO Compliance Solutions:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Renewable Energy Procurement:</strong> Secure power from
              solar, wind, or hydro projects via open access, green energy
              exchanges, or PPAs.
            </li>
            <li>
              <strong>REC (Renewable Energy Certificate) Trading:</strong> Meet
              RPO targets by procuring RECs from recognized exchanges (e.g.,
              IEX, PXIL).
            </li>
            <li>
              <strong>RPO Strategy & Advisory:</strong> Custom compliance
              planning based on your load, location, and regulatory
              requirements.
            </li>
            <li>
              <strong>End-to-End Compliance Management:</strong> From
              registration to documentation and submission to state nodal
              agencies—we handle it all.
            </li>
            <li>
              <strong>Audit-Ready Reporting:</strong> Maintain accurate records
              and reports for regulatory inspections and audits.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">
            Who Needs RPO Services?
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>DISCOMs (Distribution Companies)</strong>
            </li>
            <li>
              <strong>Captive Power Plant Operators</strong>
            </li>
            <li>
              <strong>Open Access Consumers</strong>
            </li>
            <li>
              <strong>Large Industrial and Commercial Units</strong>
            </li>
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
              <strong>Regulatory Expertise:</strong> Stay updated and compliant
              with evolving RPO norms across states.
            </li>
            <li>
              <strong>Pan-India Network:</strong> Access to renewable energy and
              RECs across all eligible markets.
            </li>
            <li>
              <strong>Transparent Execution:</strong> Real-time tracking,
              documentation, and support.
            </li>
            <li>
              <strong>Sustainability Focus:</strong> Align RPO compliance with
              your green energy and ESG goals.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mt-12 text-center">
            Stay Compliant, Stay Ahead
          </h2>
          <p className="text-center mt-4">
            Let <strong>EEX ORIGIN</strong> be your trusted partner in
            fulfilling RPO obligations with ease, efficiency, and integrity.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default RPOObligations;
