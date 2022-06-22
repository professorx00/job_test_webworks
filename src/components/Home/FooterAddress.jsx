import React from "react";

export default function FooterAddress() {
  return (
    <div className="addressContainer">
      <div>
        <span className="titleAddress">Main Office</span>
        <h3>
          1000 Assembly St, Rembert Dennis Building, suite 421
          <br />
          Columbia, SC 29201
        </h3>
      </div>

      <div>
        <span className="titleAddress">Geodetic Survery Section</span>
        <h3>
          5 Geology Rd
          <br />
          Columbia, SC 29212
        </h3>
      </div>

      <div>
        <span className="titleAddress">Health and Demographics Division</span>
        <h3>
          1000 Assembly St, Rembert Dennis Building, suite 240
          <br />
          Columbia, SC 29201
        </h3>
      </div>
    </div>
  );
}
