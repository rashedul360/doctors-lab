import React from "react";
import { Card, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Service = ({ service }) => {
  // destracture property
  const { name, desc, img, charge, key } = service;
  const history = useHistory();
  // redirect method
  const handleInfo = () => {
    history.push(`/info/${key}`);
  };
  return (
    <div>
      {/* use property  */}
      <Col>
        <Card style={{ border: "none" }} className="text-start">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="text-start">
              {desc.slice(0, 200)}[.....]
            </Card.Text>
            <h5>
              {" "}
              service charge <span>${charge}</span>
            </h5>
            {/* more information part  */}
            <button onClick={handleInfo} className="btn btn-warning">
              Learn more
            </button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
