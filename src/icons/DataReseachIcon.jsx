import React from "react";
import SvgWrapper from "./SvgWrapper";
import DataResearchSvg from "./DataResearchIcon.svg";

export default function DataReseachIcon({ className }) {
  return (
    <SvgWrapper
      icon={DataResearchSvg}
      alt="Data Research Icon"
      className={className}
    />
  );
}
