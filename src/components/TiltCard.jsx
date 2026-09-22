import React, { useRef } from "react";

/**
 * Wraps content in a div that tilts in 3D toward the cursor position on
 * hover, and eases back flat on mouse leave.
 */
const TiltCard = ({ className = "", children, maxTilt = 8, ...rest }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(700px) rotateX(${-py * maxTilt}deg) rotateY(${
      px * maxTilt
    }deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(700px) rotateX(0) rotateY(0) translateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-150 ease-out ${className}`}
      style={{ transformStyle: "preserve-3d" }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default TiltCard;
