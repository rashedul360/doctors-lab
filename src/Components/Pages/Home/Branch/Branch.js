import React from "react";
import { Card, Col } from "react-bootstrap";

const Branch = ({ branch }) => {
  // distracture from props branch
  const { img, name, service, open } = branch;
  return (
    // use data
    <div>
      <Col>
        <Card style={{ border: "none" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text></Card.Text>
            <div className="d-flex justify-content-evenly">
              <div>
                <p>service in {service}</p>
              </div>
              <div>
                <p>open {open} </p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Branch;
