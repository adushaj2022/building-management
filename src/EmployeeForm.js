import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./EmployeeForm.css";

const EmployeeForm = () => {
  const [employees, setEmployees] = useState([]);
  const [active, setActive] = useState(true);

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get("http://localhost:3001/employees");
      setEmployees(request.data);
      return request;
    }

    fetchData();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !position || !salary) {
      setError("Please enter all fields");
    } else {
      let employeeID = employees[employees.length - 1];
      Axios.post("http://localhost:3001/createEmployee", {
        firstName: firstName,
        lastName: lastName,
        position: position,
        salary: salary,
        bid: 1,
      }).then(() =>
        setEmployees([
          ...employees,
          {
            eid: employeeID.eid + 1,
            firstName: firstName,
            lastName: lastName,
            position: position,
            salary: salary,
            bid: 1,
          },
        ])
      );

      setSuccess(`You successfully added ${firstName} as an employee!`);
      setfirstName("");
      setlastName("");
      setPosition("");
      setSalary("");
    }
  };

  let employeeData = employees.map((employee) => {
    return (
      <tr key={employee.eid}>
        <td>{employee.eid}</td>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.position}</td>
        <td>${employee.salary.toLocaleString()}</td>
      </tr>
    );
  });

  if (error) {
    setTimeout(() => setError(""), 2000);
  }

  if (success) {
    setTimeout(() => setSuccess(""), 2000);
  }

  return (
    <div>
      <div className="employees-header">
        <h3>{active ? "Building Employees" : "Add an employee"}</h3>
        <div className="buttons">
          <button
            className={active ? "view view-active" : "view"}
            onClick={() => setActive(true)}
          >
            View employees
          </button>
          <button
            className={!active ? "view view-active" : "view"}
            onClick={() => setActive(false)}
          >
            Add employees
          </button>
        </div>
      </div>
      {active ? (
        <table className="styled-table">
          <thead>
            <tr>
              <th> ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Salary</th>
            </tr>
          </thead>

          <tbody>{employeeData}</tbody>
        </table>
      ) : (
        <div className="form-container">
          {" "}
          <form>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <input
              type="text"
              placeholder="Salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
            <div className="btn-container">
              {error ? (
                <div className="error-msg">
                  <p>{error}</p>
                </div>
              ) : (
                ""
              )}

              {success ? (
                <div className="success-msg">
                  <p>{success}</p>
                </div>
              ) : (
                ""
              )}

              <button className="submit-btn" onClick={handleClick}>
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default EmployeeForm;
