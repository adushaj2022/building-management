import React, { useContext } from "react";
import "./App.css";
import "./NavBar.css";
import { BiBuildings } from "react-icons/bi";
import { RiMenuLine } from "react-icons/ri";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { SideBarContext } from "./SideBarContext";

const NavBar = () => {
  const { value, setValue } = useContext(SideBarContext);

  const handleClick = () => {
    setValue(!value);
  };

  const titleStyle = value
    ? "title-container title-isClicked"
    : "title-container";

  return (
    <div className="app">
      {" "}
      <div className="container">
        <span className={titleStyle}>
          <RiMenuLine className="menu" onClick={handleClick} />
          <BiBuildings className="profile-icon" />
          <h1 className="title">Melrose Ave</h1>
        </span>

        <ul className="list">
          <span className="signOut">
            <li className="list-element"> Edit Profile </li>
          </span>
          <span className="signOut">
            <li className="list-element"> help </li>
          </span>
          <span className="signOut">
            <RiLogoutBoxRLine className="signOutBtn" />
            <li className="list-element"> Sign out</li>
          </span>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
