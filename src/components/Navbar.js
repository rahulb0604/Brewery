import React from "react";
import "../style/Navbar.css";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar({
  text,
  setText,
  option,
  setOption,
  setData,
  getData,
  searchbar = "true",
}) {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };
  return (
    <div className="navbar">
      <div className="navleft">
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <div className="navcenter">
        {searchbar === "true" ? (
          <div className="searchOutline">
            <select
              className="searchOption"
              value={option}
              onChange={(e) => {
                setOption(e.target.value);
                e.target.value === "Type" ? setText("micro") : setText(...text);
              }}
            >
              <option>Name</option>
              <option>City</option>
              <option>Type</option>
            </select>
            {option === "Type" ? (
              <div className="typeOption">
                <select
                  className="typeOptionSelect"
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                >
                  <option>micro</option>
                  <option>nano</option>
                  <option>regional</option>
                  <option>brewpub</option>
                  <option>large</option>
                  <option>planning</option>
                  <option>bar</option>
                  <option>contract</option>
                  <option>proprietor</option>
                  <option>closed</option>
                </select>
              </div>
            ) : (
              <input
                className="searchInput"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                type="text"
              />
            )}
            <button
              className="searchBtn"
              onClick={async () => {
                const res = await getData(option, text);
                setData(res);
              }}
            >
              Search
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="navright">
        <button className="logoutbtn" onClick={() => logout()}>
          Logout
        </button>
      </div>
    </div>
  );
}
