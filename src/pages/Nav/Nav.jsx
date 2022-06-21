import React from "react";
import "./Nav.css";
import MenuButton from "../../components/Nav/MenuButton";
import Title from "../../components/Nav/Title";
import NavigationBar from "../../components/Nav/NavigationBar";
import SearchButton from "../../components/Nav/SearchButton";

export default function Nav({ handleMenu }) {
  return (
    <div className="navContainer">
      <div className="rightSideNav">
        <MenuButton onClick={handleMenu} />
        <Title />
      </div>
      <div className="leftSideNav">
        <NavigationBar />
        <SearchButton />
      </div>
    </div>
  );
}
