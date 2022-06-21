import React from "react";
import { useSelector } from "react-redux";
import "./Home.css";
import "./Cards.css";
import "./PopularService.css";
import Menu from "../../components/Home/Menu";
import SearchImage from "../../components/Home/SearchImage";
import Cards from "../../components/Home/Cards";
import PopularServices from "../../components/Home/PopularServices";

export default function Home() {
  const { menu } = useSelector((state) => state.ui);
  return (
    <div>
      {menu ? <Menu /> : null}
      <SearchImage />
      <Cards />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PopularServices />
      </div>
    </div>
  );
}
