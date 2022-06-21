import { SvgIcon } from "@mui/material";
import React from "react";

export default function SvgWrapper({ icon, alt, width, height, style }) {
  return <img src={icon} alt={alt} width={width} height={height} />;
}