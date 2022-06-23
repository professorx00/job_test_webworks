import React from "react";
import HeaderStyleFive from "../App/HeaderStyleFive";

export default function MenuOptions() {
  return (
    <div className="optionsRow">
      <div className="optionsColumn">
        <HeaderStyleFive label="Data & Research" />
        <a href="/" className="optionLinkStyle">
          Economy
        </a>
        <a href="/" className="optionLinkStyle">
          State Fiances
        </a>
        <a href="/" className="optionLinkStyle">
          Healthcare
        </a>
        <a href="/" className="optionLinkStyle">
          Local Governement
        </a>
        <a href="/" className="optionLinkStyle">
          Population and Demographics
        </a>
        <a href="/" className="optionLinkStyle">
          State Register Calculations
        </a>
        <a href="/" className="optionLinkStyle">
          Presentations
        </a>

        <HeaderStyleFive label="Legislative Fiscal Impacts" />
        <a href="/" className="optionLinkStyle">
          Current General Assembly Session
        </a>
        <a href="/" className="optionLinkStyle">
          Previous General Assembly Session
        </a>
        <a href="/" className="optionLinkStyle">
          Forms
        </a>
      </div>
      <div className="optionsColumn">
        <HeaderStyleFive label="Geography & Mapping" />
        <a href="/" className="optionLinkStyle">
          Transportation Carrier Network(Uber)
        </a>
        <a href="/" className="optionLinkStyle">
          SC Real Time Network
        </a>
        <a href="/" className="optionLinkStyle">
          SC State GIS
        </a>
        <a href="/" className="optionLinkStyle">
          Maps
        </a>
        <a href="/" className="optionLinkStyle">
          Interactive Mapping
        </a>
        <a href="/" className="optionLinkStyle">
          Statewide Aerial Imagery
        </a>
      </div>
      <div className="optionsColumn">
        <HeaderStyleFive label="Programs & Services" />
        <a href="/" className="optionLinkStyle">
          Precinct Demographics and Redistricting
        </a>
        <a href="/" className="optionLinkStyle">
          State 911 Program
        </a>
        <a href="/" className="optionLinkStyle">
          Data Services and Online Solution
        </a>
        <a href="/" className="optionLinkStyle">
          Geodetic Survey
        </a>
        <a href="/" className="optionLinkStyle">
          Fiscal Analysis
        </a>
        <a href="/" className="optionLinkStyle">
          2020 Census
        </a>
      </div>
    </div>
  );
}
