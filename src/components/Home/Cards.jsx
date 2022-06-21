import React from "react";
import DataResearchIcon from "../../icons/DataReseachIcon";
import GeographyIcon from "../../icons/GeographyIcon";
import ProgramsIcon from "../../icons/ProgramsIcon";
import LegislativeIcon from "../../icons/LegislativeIcon";

const handleClick = () => {
  console.log("clicked");
};

export default function Cards() {
  return (
    <div className="cardsContainer">
      <div className="cards" onClick={handleClick}>
        <DataResearchIcon className="cardIcons" />
        <span className="cardLabel">
          DATA &<br /> RESEARCH
        </span>
      </div>
      <div className="cards" onClick={handleClick}>
        <GeographyIcon className="cardIcons" />
        <span className="cardLabel">GEOGRAPHY & MAPPING</span>
      </div>
      <div className="cards" onClick={handleClick}>
        <ProgramsIcon className="cardIcons" />
        <span className="cardLabel">PROGRAMS & SERVICES</span>
      </div>
      <div className="cards" onClick={handleClick}>
        <LegislativeIcon className="cardIcons" />
        <span className="cardLabel">
          LEGISLATIVE<br></br> FISCAL IMPACTS
        </span>
      </div>
    </div>
  );
}
