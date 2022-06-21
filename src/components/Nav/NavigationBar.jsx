import React from "react";

export default function NavigationBar() {
  return (
    <div className="navBar">
      <a className="navButton" href="/">
        <h1>About us</h1>
      </a>

      <a className="navButton" href="/">
        <h1>EVENTS</h1>
      </a>

      <a className="navButton" href="/">
        <h1>BOARDS & COMMITTEES</h1>
      </a>
    </div>
  );
}
