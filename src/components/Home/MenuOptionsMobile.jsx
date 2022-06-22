import React, { useState } from "react";
import HeaderStyleFiveMobile from "../App/HeaderStyleFiveMobile";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DataandResearch from "./mobileMenu/DataandResearch";
import Geography from "./mobileMenu/Geography";
import Products from "./mobileMenu/Products";
import Legal from "./mobileMenu/Legal";

export default function MenuOptionsMobile() {
  const [dataAndResearch, setDataResearch] = useState(false);
  const [geograpghy, setGeograpghy] = useState(false);
  const [products, setProducts] = useState(false);
  const [legal, setLegal] = useState(false);
  return (
    <div style={{ background: "white" }}>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <HeaderStyleFiveMobile label="Data & Research" />
          <div
            onClick={() => {
              setDataResearch(!dataAndResearch);
            }}
          >
            {dataAndResearch ? (
              <KeyboardArrowUpIcon sx={{ fontSize: 40 }} />
            ) : (
              <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
            )}
          </div>
        </div>
        <div>{dataAndResearch ? <DataandResearch /> : null}</div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <HeaderStyleFiveMobile label="Geography & Mapping" />
          <div
            onClick={() => {
              setGeograpghy(!geograpghy);
            }}
          >
            {geograpghy ? (
              <KeyboardArrowUpIcon sx={{ fontSize: 40 }} />
            ) : (
              <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
            )}
          </div>
        </div>
        <div>{geograpghy ? <Geography /> : null}</div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <HeaderStyleFiveMobile label="Programs & Services" />
          <div
            onClick={() => {
              setProducts(!products);
            }}
          >
            {products ? (
              <KeyboardArrowUpIcon sx={{ fontSize: 40 }} />
            ) : (
              <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
            )}
          </div>
        </div>
        <div>{products ? <Products /> : null}</div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <HeaderStyleFiveMobile label="Legislative Fiscal Impacts" />
          <div
            onClick={() => {
              setLegal(!legal);
            }}
          >
            {legal ? (
              <KeyboardArrowUpIcon sx={{ fontSize: 40 }} />
            ) : (
              <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
            )}
          </div>
        </div>
        <div>{legal ? <Legal /> : null}</div>
      </div>
    </div>
  );
}
