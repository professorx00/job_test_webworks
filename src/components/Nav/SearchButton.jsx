import React from "react";
import SvgWrapper from "../../icons/SvgWrapper";
import SearchIcon from "../../asset/SearchIcon.svg";
import SearchIconAlt from "../../asset/SearchIconAlt.svg";
import { useDispatch, useSelector } from "react-redux";
import { openSearch } from "../../store/uiSlice";

export default function SearchButton() {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.ui);
  return (
    <div
      className={search ? "searchButton" : "searchButtonAlt"}
      onClick={() => {
        dispatch(openSearch());
      }}
    >
      {search ? (
        <SvgWrapper icon={SearchIcon} alt="Search Icon"></SvgWrapper>
      ) : (
        <SvgWrapper icon={SearchIconAlt} alt="Search Icon"></SvgWrapper>
      )}
    </div>
  );
}
