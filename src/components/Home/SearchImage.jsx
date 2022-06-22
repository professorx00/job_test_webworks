import React from "react";
import SearchIcon from "../../icons/searchIcon";
import Button from "../Button";

export default function SearchImage() {
  return (
    <div className="searchContainer">
      <img src="/capitol.jpg" alt="capitol" width="99.1%" height="50%" />
      <div className="searchBox">
        <p className="statement">
          Providing independent research, analysis, and
          <br /> resources to facilitate informed policy decisions
          <br /> and administration of services
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <input className="searchInput" placeholder="Search rfa.sc.gov" />
          <Button
            variant={"closed"}
            label="SEARCH"
            icon={<SearchIcon />}
            alt="Search Button"
            onClick={() => {
              console.log("clicked!");
            }}
          />
        </div>
      </div>
    </div>
  );
}
