import React from "react";
import SvgWrapper from "./SvgWrapper";
import SearchIconSvg from "./SearchIcon.svg";

export default function SearchIcon() {
  return <SvgWrapper className="icon" icon={SearchIconSvg} alt="Search Icon" />;
}
