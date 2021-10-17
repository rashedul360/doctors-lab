import React from "react";
import { Card, Col } from "react-bootstrap";

const Doctor = ({ doctor }) => {
  const { name, img, desc, price, id } = doctor;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{desc.slice(0, 300)} [...]</Card.Text>
            <div className="d-flex justify-content-around">
              <div>
                <h4>veset: {price}</h4>
              </div>
              <div>
                <h4>doctor ID: {id}</h4>
              </div>
            </div>
            <button className="btn btn-warning mt-3">more details</button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Doctor;
