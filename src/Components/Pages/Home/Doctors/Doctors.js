import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import RegularDoctors from "../RegularDoctors/RegularDoctors";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  // fetching data
  useEffect(() => {
    fetch("doctors.json")
      .then((res) => res.json())
      // set data
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className="mt-5 mb-5">
      {/* map data for signle wise show */}
      <h1>Our famouse doctor </h1>
      <Row xs={1} md={2} className="g-4 rounded container mx-auto">
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor}></Doctor>
        ))}
      </Row>
      {/* map data for signle wise show */}
      <div className="mt-5">
        {" "}
        <h1>Top Reted Doctor</h1>
        <Row xs={2} md={5} className="g-4 rounded container mx-auto mt-5">
          {doctors.map((doctor) => (
            <RegularDoctors key={doctor.id} doctor={doctor}></RegularDoctors>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Doctors;
