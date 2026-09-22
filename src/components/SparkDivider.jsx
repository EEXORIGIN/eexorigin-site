import React from "react";

/**
 * Animated electricity spark divider between page sections.
 * A horizontal line with a traveling green glow and a pulsing center node.
 */
const SparkDivider = () => {
  return (
    <div className="spark-divider">
      <div className="spark-line" />
      <div className="spark-node" />
    </div>
  );
};

export default SparkDivider;
