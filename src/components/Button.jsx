import React from "react";

export default function Button({ variant, label, icon, alt, onClick }) {
  return (
    <div className={`button-${variant}`} onClick={onClick} alt={alt}>
      {label}
      {icon ? icon : null}
    </div>
  );
}
