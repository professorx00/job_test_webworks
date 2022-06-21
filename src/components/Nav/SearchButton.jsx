import React from "react";
import SvgWrapper from "../../icons/SvgWrapper";
import SearchIcon from "../../asset/SearchIcon.svg";

export default function SearchButton() {
  return (
    <div className="searchButton">
      <SvgWrapper icon={SearchIcon} alt="Search Icon"></SvgWrapper>
    </div>
  );
}
