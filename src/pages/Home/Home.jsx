import React from "react";
import { useSelector } from "react-redux";
import Menu from "../../components/Home/Menu";

export default function Home() {
  const { menu } = useSelector((state) => state.ui);
  return (
    <div>
      {menu ? <Menu /> : null}
      {JSON.stringify(menu)}
    </div>
  );
}
