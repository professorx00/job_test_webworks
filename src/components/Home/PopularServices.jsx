import React from "react";
import HeaderStyleOne from "./HeaderStyleOne";
export default function PopularServices() {
  return (
    <div className="container">
      <HeaderStyleOne label="Popular Services and Links" />
      <div className="linkContainer">
        <div className="column">
          <a href="/" className="linkStyle1 links">
            Overview and History of the South Carolina State Budget
          </a>
          <a href="/" className="linkStyle1 links">
            Employer Contribution trends
          </a>
          <a href="/" className="linkStyle1 links">
            Appropiation Bills and Acts
          </a>
        </div>
        <div className="column">
          <a href="/" className="linkStyle1 links">
            Overview and History of the South Carolina State Budget
          </a>
          <a href="/" className="linkStyle1 links">
            Employer Contribution trends - June 4, 2019
          </a>
          <a href="/" className="linkStyle1 links">
            Executive Budget Office State Agency Budget Plans(Requests)
          </a>
        </div>
        <div className="column">
          <a href="/" className="linkStyle1 links">
            Overview and History of the South Carolina State Budget
          </a>
          <a href="/" className="linkStyle1 links">
            Employer Contribution trends - June 4, 2019
          </a>
          <a href="/" className="linkStyle1 links">
            Executive Budget Office State Agency Budget Plans(Requests)
          </a>
        </div>
      </div>
    </div>
  );
}
