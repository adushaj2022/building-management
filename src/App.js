import React, { useState } from "react";
import "./App.css";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { SideBarContext } from "./SideBarContext";
import { BrowserRouter, Route } from "react-router-dom";
import Employees from "./Employees";
import Calender from "./Calender";
import Residents from "./Residents";

function App() {
  const [value, setValue] = useState(true);
  return (
    <BrowserRouter>
      <div className="app">
        <SideBarContext.Provider value={{ value, setValue }}>
          <NavBar />

          <div className="body-container">
            <div className={value ? "side-bar" : "side-bar-inactive"}>
              {" "}
              <SideBar />
            </div>

            <div className="main-contents">
              <div className="midContainer">
                <Route path="/Employees" component={Employees} />
                <Route path="/Calender" component={Calender} />
                <Route path="/Residents" component={Residents} />
              </div>
            </div>
          </div>
        </SideBarContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
