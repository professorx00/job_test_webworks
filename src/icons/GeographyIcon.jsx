import React from "react";
import SvgWrapper from "./SvgWrapper";
import GeographyIconSvg from "./Geography-Icon.svg";

export default function GeographyIcon({ className }) {
  return (
    <SvgWrapper
      className={className}
      icon={GeographyIconSvg}
      alt="Geography Icon"
    />
  );
}
