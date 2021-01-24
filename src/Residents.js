import React, { useEffect, useState } from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import Axios from "axios";
import "./Resident.css";
const Residents = () => {
  const [residents, setResidents] = useState([]);

  function insertResident(res) {
    Axios.post("http://localhost:3001/createResident", res).then(() =>
      console.log("inserted")
    );
  }

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get("http://localhost:3001/residents");
      setResidents(request.data);
      return;
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="profile-container">
        <div className="profile">
          <div className="residentNav">
            <h3>Residents</h3>
            <h5>Filter</h5>
          </div>
          {residents?.map((resident) => {
            return (
              <>
                <div className="resident" key={resident.rid}>
                  <div className="header">
                    <img src={resident.imgURL} alt="person"></img>
                    <h4 className="resName">
                      {resident.firstName} {" " + resident.lastName}
                    </h4>
                  </div>
                  <h4>Contact Info</h4>
                  <div className="contactInfo">
                    <div className="phoneNumber">
                      <div className="logo">
                        {" "}
                        <HiOutlinePhone />
                      </div>
                      <div className="section">
                        <p>
                          <strong> Phone Number </strong>
                        </p>
                        <p>
                          <small> {resident.phoneNumber} </small>
                        </p>
                      </div>
                    </div>
                    <div className="phoneNumber">
                      <div className="logo">
                        <HiOutlineMail />
                      </div>
                      <div className="section">
                        <p>
                          <strong> Email </strong>
                        </p>
                        <p>
                          <small> {resident.email} </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Residents;
