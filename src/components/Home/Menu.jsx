import React from "react";
import MenuOptions from "./MenuOptions";

export default function Menu() {
  return (
    <div className="menuContainer">
      <div className="menuList">
        <ul>
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
      <div className="OptionsContainer">
        <MenuOptions />
      </div>
    </div>
  );
}
