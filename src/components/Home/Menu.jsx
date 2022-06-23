import React from "react";
import MenuOptions from "./MenuOptions";
import MenuOptionsMobile from "./MenuOptionsMobile";
import { useWindowSize } from "rooks";

export default function Menu() {
  const { innerWidth } = useWindowSize();
  return (
    <div className="menuContainer">
      <div className="menuList">
        <ul className="menuUl">
          <li>
            <a href="/" className="menuLinkStyle1">
              Home
            </a>
            <hr />
          </li>
          <li>
            <a href="/" className="menuLinkStyle1">
              News & Events
            </a>
            <hr />
          </li>
          <li>
            <a href="/" className="menuLinkStyle1">
              About Us
            </a>
            <hr />
          </li>
          <li>
            <a href="/" className="menuLinkStyle1">
              Contact Us
            </a>
            <hr />
          </li>
          <li>
            <a href="/" className="menuLinkStyle1">
              Boards & Committees
            </a>
          </li>
        </ul>
      </div>
      {innerWidth > 746 ? (
        <div className="OptionsContainer">
          <MenuOptions />
        </div>
      ) : null}
      {innerWidth <= 746 ? (
        <div className="OpitionsContainerMobile">
          <MenuOptionsMobile />
        </div>
      ) : null}
    </div>
  );
}
