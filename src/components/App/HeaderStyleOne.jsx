import React from "react";

export default function HeaderStyleOne({ label }) {
  return (
    <div style={{ width: "100%" }}>
      <h1 className="headerStyle1">{label}</h1>
      <div className="headerStyle1HR"></div>
    </div>
  );
}
