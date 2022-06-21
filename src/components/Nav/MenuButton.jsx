import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { openMenu } from "../../store/uiSlice";
import { useDispatch } from "react-redux";

export default function MenuButton() {
  const dispatch = useDispatch();
  return (
    <div
      className="menuButton"
      alt="Menu Button"
      onClick={() => {
        dispatch(openMenu());
      }}
    >
      <MenuIcon sx={{ fontSize: 50, color: "white" }} />
      <span className="menuButtontxt" alt="menu">
        MENU
      </span>
    </div>
  );
}
