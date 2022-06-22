import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { openMenu } from "../../store/uiSlice";
import { useDispatch, useSelector } from "react-redux";

export default function MenuButton() {
  const dispatch = useDispatch();
  const { menu } = useSelector((state) => state.ui);
  return !menu ? (
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
  ) : (
    <div
      className="menuButton"
      alt="Menu Button"
      onClick={() => {
        dispatch(openMenu());
      }}
    >
      <CloseIcon sx={{ fontSize: 50, color: "white" }} />
      <span className="menuButtontxt" alt="menu">
        CLOSE
      </span>
    </div>
  );
}
