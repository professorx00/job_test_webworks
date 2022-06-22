import React from "react";
import FooterLinks from "./FooterLinks";
import FooterAddress from "./FooterAddress";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const handleClick = () => {
  window.scrollTo(0, 0);
};

export default function Footer() {
  return (
    <div className="Footer">
      <div className="logoContianer">
        <h4>South Carolina</h4>
        <h4>Revenu and Fiscal Affairs Office</h4>
        <img
          src="Group 262.png"
          width="50%"
          height="50%"
          className="footerLogoImg"
          alt="watermark of logo"
        />
      </div>
      <div className="linkContainer">
        <FooterLinks />
      </div>
      <div>
        <FooterAddress />
      </div>

      <div className="top">
        <span className="topLabel">Back to Top</span>
        <div
          className="favIcon"
          onClick={() => {
            handleClick();
          }}
        >
          <KeyboardArrowUpIcon className="arrow" />
        </div>
      </div>
    </div>
  );
}
