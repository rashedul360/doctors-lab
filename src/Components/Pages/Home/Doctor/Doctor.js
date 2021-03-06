import React from "react";
import { Card, Col } from "react-bootstrap";

const Doctor = ({ doctor }) => {
  // destracture form props doctor
  const { name, img, desc, price, id } = doctor;
  return (
    // use property
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{desc.slice(0, 300)} [...]</Card.Text>
            <div className="d-flex justify-content-around">
              <div>
                <h4>
                  Appointment fee: <span>${price}</span>
                </h4>
              </div>
              <div>
                <h4>doctor ID: {id}</h4>
              </div>
            </div>
            <button className="btn btn-warning mt-3">
              <i className="fas fa-arrow-circle-right"></i> more details
            </button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Doctor;
