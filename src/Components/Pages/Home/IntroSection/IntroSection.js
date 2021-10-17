import React from "react";
import { useHistory } from "react-router";
import "./IntroSection.css";
const IntroSection = () => {
  const history = useHistory();
  const handleAppointment = () => {
    history.push("/services");
  };
  return (
    <div className="intro-container text-white ">
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <h1>we are improving to your health</h1>
          <p>desc</p>
          <p>for emargency call: (01312416730)</p>
          <button onClick={handleAppointment} className="btn btn-success mb-5">
            book an appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
