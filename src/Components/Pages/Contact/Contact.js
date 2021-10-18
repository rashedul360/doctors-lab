import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import contactImg from "../../Images/contact.svg";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <div className="row justify-content-center align-items-center contact-container">
        <div className="col-md-6">
          <h1 className="mb-5">
            <span>Contact</span>
          </h1>
          <div className="contact-form-container">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <FormControl placeholder="Username" />
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl placeholder="valid email address" />
              <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
            </InputGroup>

            <Form.Label htmlFor="basic-url">velidation</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">
                your faceboook profile link
              </InputGroup.Text>
              <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl aria-label="Amount (to the nearest dollar)" />
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>

            <InputGroup>
              <InputGroup.Text>With textarea</InputGroup.Text>
              <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>
            <div className="mt-3 mb-3">
              <button className="btn btn-danger">
                {" "}
                <i className="far fa-share-square"></i> send message
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={contactImg} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
