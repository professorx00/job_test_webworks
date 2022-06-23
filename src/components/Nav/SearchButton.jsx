import React, { useState } from "react";
import SvgWrapper from "../../icons/SvgWrapper";
import SearchIcon from "../../asset/SearchIcon.svg";
import SearchIconAlt from "../../asset/SearchIconAlt.svg";
import { useDispatch, useSelector } from "react-redux";
import { openSearch } from "../../store/uiSlice";

export default function SearchButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.ui);

  const handleClick = (event) => {
    console.log(event);
    setAnchorEl(anchorEl ? null : event.currentTarget);
    dispatch(openSearch());
  };

  const handleSearchClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    dispatch(openSearch());
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div
      className={!search ? "searchButton" : "searchButtonAlt"}
      aria-describedby={id}
    >
      <div
        className="iconButton"
        onClick={(event) => {
          handleClick(event);
        }}
      >
        {!search ? (
          <SvgWrapper icon={SearchIcon} alt="Search Icon"></SvgWrapper>
        ) : (
          <SvgWrapper icon={SearchIconAlt} alt="Search Icon"></SvgWrapper>
        )}
      </div>
      {anchorEl ? (
        <div className="customPopover">
          <input className="searchInputNav" placeholder="Enter search term" />
          <div
            className={`sbutton`}
            onClick={handleSearchClick}
            alt="Search Button"
          >
            SEARCH
          </div>
        </div>
      ) : null}
    </div>
  );
}
