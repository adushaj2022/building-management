import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Employees.css";
import EmployeeForm from "./EmployeeForm";

const Employees = () => {
  return (
    <div className="employees-container">
      <EmployeeForm />
    </div>
  );
};

export default Employees;
