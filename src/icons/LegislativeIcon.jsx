import React from "react";
import SvgWrapper from "./SvgWrapper";
import LegislativeIconSvg from "./Legislative-Icon.svg";

export default function LegislativeIcon({ className }) {
  return (
    <SvgWrapper
      className={className}
      icon={LegislativeIconSvg}
      alt="Legislative Icon"
    />
  );
}
