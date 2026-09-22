import React from "react";

const marqueeItems = [
  { name: "IEX", desc: "Indian Energy Exchange" },
  { name: "PXIL", desc: "Power Exchange India" },
  { name: "CERC", desc: "Central Electricity Regulatory" },
  { name: "SECI", desc: "Solar Energy Corp of India" },
  { name: "NTPC", desc: "National Thermal Power" },
  { name: "SLDC", desc: "State Load Despatch Centre" },
  { name: "RLDC", desc: "Regional Load Despatch Centre" },
  { name: "NLDC", desc: "National Load Despatch Centre" },
  { name: "POSOCO", desc: "Power System Operation" },
  { name: "REC", desc: "Renewable Energy Certificates" },
];

const ExchangeMarquee = () => {
  return (
    <section className="marquee-section">
      <div className="marquee-label">
        Markets & Exchanges We Operate Through
      </div>

      <div className="marquee-track">
        <div className="marquee-scroll">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <React.Fragment key={i}>
              <div className="marquee-item">
                <span className="marquee-name">{item.name}</span>
                <span className="marquee-desc">{item.desc}</span>
              </div>
              <span className="marquee-dot" aria-hidden="true" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExchangeMarquee;
