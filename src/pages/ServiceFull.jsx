import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ServiceFull = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Long-Term PPA Section */}
<section className="py-12 bg-gray-100">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-semibold mb-4 text-gray-900">
        Long-Term Power Purchase Agreements (PPAs)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Secure your energy future with long-term stability and sustainability.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        At <span className="font-semibold text-blue-700">EEX ORIGIN</span>, we specialize in structuring and managing Long-Term Power Purchase Agreements (PPAs) that provide predictable pricing, reliable energy supply, and support for clean energy goals over 10 to 25 years.
      </p>

      <h3 className="text-2xl font-semibold mb-4">What is a Long-Term PPA?</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        A Long-Term PPA is a contractual agreement between a power generator and a buyer (corporate, utility, or government) to supply electricity over an extended period—typically 10 to 25 years. These agreements are vital for securing project financing, managing energy costs, and achieving long-term sustainability targets.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Our Long-Term PPA Services Include:</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li><span className="font-semibold">Contract Design & Negotiation:</span> Structuring terms that align with your business strategy and risk profile.</li>
        <li><span className="font-semibold">Renewable Integration:</span> Solar, wind, hydro, or hybrid solutions backed by clean energy assets.</li>
        <li><span className="font-semibold">Price Certainty:</span> Fixed or partially indexed pricing models to hedge against future market fluctuations.</li>
        <li><span className="font-semibold">Bankable Agreements:</span> PPA structures designed to support project financing and investment-grade standards.</li>
        <li><span className="font-semibold">Performance Monitoring:</span> Continuous tracking and reporting of energy generation and delivery.</li>
      </ul>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Who Benefits from Long-Term PPAs?</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><span className="font-semibold">Corporate Buyers:</span> Reduce carbon footprint, fix long-term energy costs, and meet ESG targets.</li>
          <li><span className="font-semibold">Utilities:</span> Lock in stable supply sources and meet renewable purchase obligations.</li>
          <li><span className="font-semibold">IPPs and Developers:</span> Secure revenue streams to support capital-intensive energy projects.</li>
          <li><span className="font-semibold">Government Entities:</span> Procure power under stable, long-term frameworks with minimal risk.</li>
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Why Partner with EEX ORIGIN?</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><span className="font-semibold">Deep Industry Experience:</span> Proven track record in executing long-term energy contracts.</li>
          <li><span className="font-semibold">Tailored Solutions:</span> Each PPA is designed to match your energy demand, budget, and sustainability roadmap.</li>
          <li><span className="font-semibold">End-to-End Management:</span> From feasibility to final settlement, we handle the full PPA lifecycle.</li>
          <li><span className="font-semibold">Green Energy Leadership:</span> Support the global energy transition with reliable clean power.</li>
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Plan Today for a Sustainable Tomorrow</h3>
        <p className="text-gray-700 leading-relaxed">
          Partner with <span className="font-semibold text-blue-700">EEX ORIGIN</span> to lock in reliable, cost-effective, and clean energy for the long run.
        </p>
      </div>
    </motion.div>
  </div>
</section>


     
     {/* Medium-Term PPA Section */}
<section className="py-12 bg-gray-00">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-semibold mb-4 text-gray-900">
        Medium-Term Power Purchase Agreements (PPAs)
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Flexible energy contracts tailored for evolving business needs.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        At <span className="font-semibold text-blue-700">EEX ORIGIN</span>, we offer customized Medium-Term Power Purchase Agreements (PPAs) ranging from 3 to 10 years, giving energy buyers and producers the perfect balance between long-term stability and short-term flexibility.
      </p>

      <h3 className="text-2xl font-semibold mb-4">What is a Medium-Term PPA?</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        A Medium-Term PPA is a contractual agreement between an energy producer and a buyer to purchase electricity for a fixed or indexed price over a medium-duration period (typically 3–10 years). These contracts are ideal for businesses looking for stable pricing without being locked into long-term commitments.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Our Services Include:</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li><span className="font-semibold">Contract Structuring:</span> Tailored PPA terms based on your load profile, technology, and risk appetite.</li>
        <li><span className="font-semibold">Price Hedging:</span> Protect against market volatility with fixed or indexed pricing models.</li>
        <li><span className="font-semibold">Flexible Tenure:</span> Choose contract durations that align with your business cycles or project phases.</li>
        <li><span className="font-semibold">Regulatory Guidance:</span> Navigate policy and compliance requirements with ease.</li>
        <li><span className="font-semibold">Portfolio Management:</span> Combine PPAs with short-term trading or green certificates for optimized returns.</li>
      </ul>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Who is it for?</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Corporate Buyers (data centers, manufacturers, commercial buildings)</li>
          <li>Independent Power Producers (IPPs)</li>
          <li>Distribution Utilities</li>
          <li>Green Energy Investors</li>
          <li>ESCOs and Aggregators</li>
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Why Choose EEX ORIGIN?</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><span className="font-semibold">Market Expertise:</span> Deep understanding of regional and global energy markets.</li>
          <li><span className="font-semibold">End-to-End Support:</span> From negotiation to settlement, we manage the full PPA lifecycle.</li>
          <li><span className="font-semibold">Green Alignment:</span> Source clean energy and meet your ESG goals through renewable PPAs.</li>
          <li><span className="font-semibold">Risk Optimization:</span> Balance supply-demand with smart contract strategies.</li>
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Let’s Power Your Next Move</h3>
        <p className="text-gray-700 leading-relaxed">
          Whether you're buying or selling energy, our medium-term PPAs help you lock in value while staying agile in a rapidly changing energy landscape.
        </p>
      </div>
    </motion.div>
  </div>
</section>




      {/* Details Section */}
<section className="py-12  bg-gray-100">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-semibold mb-4">What is Short-Term Electricity Trading?</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Short-term electricity trading involves buying and selling power over short timeframes—ranging from day-ahead to real-time markets. This plays a key role in modern power systems, helping balance fluctuating demand and renewable generation.
      </p>

      <h3 className="text-2xl font-semibold mb-4">Types of Short-Term Markets We Operate In:</h3>

      <ol className="list-decimal pl-6 space-y-4 text-gray-700">
        <li>
          <p className="font-semibold">Day-Ahead Market (DAM)</p>
          <ul className="list-disc pl-6">
            <li>Trades conducted one day before delivery.</li>
            <li>Hourly pricing based on supply and demand forecasts.</li>
            <li>Active in key markets like the U.S., EU, and India.</li>
          </ul>
        </li>

        <li>
          <p className="font-semibold">Intra-Day Market (IDM)</p>
          <ul className="list-disc pl-6">
            <li>Trade electricity within the same day.</li>
            <li>Ideal for adjusting schedules based on real-time factors like weather and consumption changes.</li>
          </ul>
        </li>

        <li>
          <p className="font-semibold">Real-Time / Balancing Market</p>
          <ul className="list-disc pl-6">
            <li>Managed by grid operators to ensure system stability.</li>
            <li>Settle deviations with real-time prices based on actual grid conditions.</li>
          </ul>
        </li>
      </ol>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Who Can Benefit?</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Renewable & thermal power producers</li>
          <li>Utilities & distribution companies</li>
          <li>Energy aggregators & traders</li>
          <li>Industrial consumers</li>
          <li>Grid operators</li>
        </ul>
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Why Choose EEX ORIGIN?</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li><strong>Market Expertise:</strong> Leverage our deep knowledge of regional and international energy markets.</li>
          <li><strong>Advanced Forecasting:</strong> Optimize trading decisions using real-time data and predictive analytics.</li>
          <li><strong>Regulatory Compliance:</strong> Seamless integration with market rules and dispatch systems.</li>
          <li><strong>Revenue Optimization:</strong> Capture value from price volatility and renewable variability.</li>
        </ul>
      </div>
    </motion.div>
  </div>
</section>


      


      {/* RPO Obligation Compliance Services Section */}
<section className="py-12 bg-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <h2 className="text-3xl font-semibold mb-4 text-gray-900">
        RPO Obligation Compliance Services
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Simplifying Renewable Purchase Obligation (RPO) compliance for your business.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        At <span className="font-semibold text-blue-700">EEX ORIGIN</span>, we help obligated entities—such as distribution companies, open access consumers, and captive power producers—seamlessly meet their Renewable Purchase Obligation (RPO) targets through structured, cost-effective, and compliant solutions.
      </p>

      <h3 className="text-2xl font-semibold mb-4">What is RPO?</h3>
      <p className="text-gray-700 leading-relaxed mb-6">
        Renewable Purchase Obligation (RPO) is a regulatory mandate by government authorities requiring certain entities to purchase a specified percentage of their total electricity consumption from renewable energy sources.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">
        <span className="font-semibold">There are different categories of RPO:</span>
      </p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>Solar RPO</li>
        <li>Non-Solar RPO (e.g., wind, biomass)</li>
        <li>Hydro Purchase Obligation (HPO)</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4">Our RPO Compliance Solutions:</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>
          <span className="font-semibold">Renewable Energy Procurement:</span> Secure power from solar, wind, or hydro projects via open access, green energy exchanges, or PPAs.
        </li>
        <li>
          <span className="font-semibold">REC (Renewable Energy Certificate) Trading:</span> Meet RPO targets by procuring RECs from recognized exchanges (e.g., IEX, PXIL).
        </li>
        <li>
          <span className="font-semibold">RPO Strategy & Advisory:</span> Custom compliance planning based on your load, location, and regulatory requirements.
        </li>
        <li>
          <span className="font-semibold">End-to-End Compliance Management:</span> From registration to documentation and submission to state nodal agencies—we handle it all.
        </li>
        <li>
          <span className="font-semibold">Audit-Ready Reporting:</span> Maintain accurate records and reports for regulatory inspections and audits.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4">Who Needs RPO Services?</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li>DISCOMs (Distribution Companies)</li>
        <li>Captive Power Plant Operators</li>
        <li>Open Access Consumers</li>
        <li>Large Industrial and Commercial Units</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-4">Why Choose EEX ORIGIN?</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><span className="font-semibold">Regulatory Expertise:</span> Stay updated and compliant with evolving RPO norms across states.</li>
        <li><span className="font-semibold">Pan-India Network:</span> Access to renewable energy and RECs across all eligible markets.</li>
        <li><span className="font-semibold">Transparent Execution:</span> Real-time tracking, documentation, and support.</li>
        <li><span className="font-semibold">Sustainability Focus:</span> Align RPO compliance with your green energy and ESG goals.</li>
      </ul>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Stay Compliant, Stay Ahead</h3>
        <p className="text-gray-700 leading-relaxed">
          Let <span className="font-semibold text-blue-700">EEX ORIGIN</span> be your trusted partner in fulfilling RPO obligations with ease, efficiency, and integrity.
        </p>
      </div>
    </motion.div>
  </div>
</section>

      
    </div>
  );
};

export default ServiceFull;
