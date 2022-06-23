import React from "react";
import { useSelector } from "react-redux";
import "./Home.css";
import "./Cards.css";
import "./PopularService.css";
import "./Footer.css";
import "./Menu.css";
import Menu from "../../components/Home/Menu";
import SearchImage from "../../components/Home/SearchImage";
import Cards from "../../components/Home/Cards";
import PopularServices from "../../components/Home/PopularServices";
import RecentUpdates from "../../components/Home/RecentUpdates";
import Calendar from "../../components/Home/Calendar";
import Footer from "../../components/Home/Footer";

export default function Home() {
  const { menu } = useSelector((state) => state.ui);
  return (
    <div className="homeContainer">
      {menu ? <Menu /> : null}
      <SearchImage />
      <Cards />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <PopularServices />
      </div>
      <div className="popularServicesContainer">
        <div className="subPopularContainers">
          <RecentUpdates />
        </div>
        <div className="subPopularContainers">
          <Calendar />
        </div>
      </div>
      <Footer />
    </div>
  );
}
