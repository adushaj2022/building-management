import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import "./Calender.css";

const Calender = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calender-container">
      {" "}
      <h2 className="calender-title"> Calender </h2>
      <Calendar onChange={onChange} value={value} className="calender" />
    </div>
  );
};

export default Calender;
