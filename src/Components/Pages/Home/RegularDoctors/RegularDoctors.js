import React from "react";
import { Card, Col } from "react-bootstrap";

const RegularDoctors = ({ doctor }) => {
  return (
    <div className="mt-5">
      <Col>
        <Card style={{ border: "none" }}>
          <Card.Img
            className="img fluid "
            style={{ borderRadius: "50%", width: "100%" }}
            src={doctor?.img}
          />
        </Card>
      </Col>
    </div>
  );
};

export default RegularDoctors;
