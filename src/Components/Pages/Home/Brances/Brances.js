import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Branch from "../Branch/Branch";

const Brances = () => {
  const [brances, setBrances] = useState([]);
  useEffect(() => {
    fetch("brances.json")
      .then((res) => res.json())
      .then((data) => setBrances(data));
  }, []);
  return (
    <div className="mb-5">
      <h1 className="mt-5 mt-5 mb-5 text-start container text-success">
        Our brances
      </h1>

      <Row xs={1} md={3} className="g-4 container mx-auto">
        {brances?.map((branch) => (
          <Branch key={branch.key} branch={branch}></Branch>
        ))}
      </Row>
    </div>
  );
};

export default Brances;
