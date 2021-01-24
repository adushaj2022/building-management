import React, { useState } from "react";
import "./SideBar.css";
import { BiUser } from "react-icons/bi";
import SideBarOption from "./SideBarOption";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [currId, setCurrId] = useState(-1);

  const handleClick = (id) => {
    setCurrId(id);
  };
  return (
    <div>
      <span className="employee-name">
        {" "}
        <BiUser className="user-icon" />
        <h3>Employee Name</h3>
      </span>
      <ul className="sb-list">
        {SideBarOption.map((element) => {
          return (
            <Link to={element.address} className="link" key={element.id}>
              <span
                className={
                  currId !== element.id
                    ? "list-row"
                    : "list-row sb-activated-option"
                }
                onClick={() => handleClick(element.id)}
              >
                <element.logo className="list-icon" />
                <li className="sb-option"> {element.title} </li>
              </span>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
