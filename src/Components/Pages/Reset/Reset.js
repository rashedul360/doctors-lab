import React, { useState } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import ResetImg from "../../Images/reset.svg";
import "./reset.css";
const Reset = () => {
  const [email, setEmail] = useState("");
  // destracture form useAuth
  const { resetPassword } = useAuth();
  // email collection
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  // collect data
  const handleFrom = (e) => {
    e.preventDefault();
    resetPassword(email);
  };
  return (
    <div>
      <div className="container reset-container animate__heartBeat d-flex">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            {/* reset qurerment  */}
            <h1>Reser your password?</h1>
            <p>provide your email address</p>
            {/* reset form  */}
            <form action="" onSubmit={handleFrom}>
              <InputGroup className="mb-3">
                <FormControl
                  onBlur={handleEmail}
                  type="email"
                  placeholder="your email address"
                  required
                />
                {/* reset button  */}
                <Button
                  variant="btn btn-danger"
                  type="submit"
                  id="button-addon2"
                >
                  <i className="fas fa-street-view"></i> Reset
                </Button>
              </InputGroup>
            </form>
          </div>
          {/* reset image  */}
          <div className="col-md-6">
            <img className="img-fluid" src={ResetImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
