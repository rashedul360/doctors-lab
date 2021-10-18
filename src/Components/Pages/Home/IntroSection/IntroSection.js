import React from "react";
import { useHistory } from "react-router";
import "./IntroSection.css";
const IntroSection = () => {
  const history = useHistory();
  const handleAppointment = () => {
    history.push("/doctors");
  };
  return (
    <div className="intro-container text-white ">
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <h1>we are improving to your health</h1>
          <p className="w-75 mx-auto">
            We are moving forward from our start to take a mission. Our
            organization is a reputed organization in this city. I also have
            several nicknames. We are getting a lot from our customers. The main
            purpose of this is that we are one of the service providers in this
            city whose service man has never decreased but is increasing every
            day.
          </p>
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
