import React from "react";
import SvgWrapper from "./SvgWrapper";
import ProgramsIconSvg from "./Programs-Icon.svg";

export default function ProgramsIcon({ className }) {
  return (
    <SvgWrapper
      className={className}
      icon={ProgramsIconSvg}
      alt="Programs Icon"
    />
  );
}
