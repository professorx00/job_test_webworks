import React from "react";

export default function FooterAddress() {
  return (
    <div className="addressContainer">
      <div>
        <span className="titleAddress">Main Office</span>
      </div>
      <div className="mainAddressContainer">
        <span className="address">
          1000 Assembly St, Rembert Dennis Building, suite 421
          <br />
          Columbia, SC 29201
        </span>
      </div>

      <div>
        <span className="titleAddress">Geodetic Survey Section</span>
      </div>
      <div className="mainAddressContainer">
        <span className="address">
          5 Geology Rd
          <br />
          Columbia, SC 29212
        </span>
      </div>

      <div>
        <span className="titleAddress">Health and Demographics Division</span>
      </div>
      <div className="mainAddressContainer">
        <span className="address">
          1000 Assembly St, Rembert Dennis Building, suite 240
          <br />
          Columbia, SC 29201
        </span>
      </div>
    </div>
  );
}
