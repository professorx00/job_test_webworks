import React from "react";

export default function SvgWrapper({ icon, alt, width, height, className }) {
  return (
    <img
      src={icon}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
