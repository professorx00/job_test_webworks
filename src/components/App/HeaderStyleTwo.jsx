import React from "react";

export default function HeaderStyleTwo({ label }) {
  return (
    <div style={{ width: "100%" }}>
      <h1 className="headerStyle2">{label}</h1>
      <div className="headerStyle2HR"></div>
    </div>
  );
}
