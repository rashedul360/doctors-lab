import React from "react";
import { Card, Col } from "react-bootstrap";

const RegularDoctors = ({ doctor }) => {
  return (
    <div className="mt-5">
      {/* set our regular doctors  */}
      <Col>
        <Card style={{ border: "none" }}>
          {/* image added  */}
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
