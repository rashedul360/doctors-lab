import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-5">
      <h2 className="mb-5">what service we provide</h2>
      <Row xs={1} md={3} className="g-4 container mx-auto">
        {services.map((service) => (
          <Service key={service.key} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
