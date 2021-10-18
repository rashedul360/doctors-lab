import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer
        className="mt-5 p-4 "
        style={{ background: "#CED1DE", color: "black" }}
      >
        <div className="row align-items-center">
          <div className="col-md-3">
            <h1 as={Link} to="/">
              Doctors Lab
            </h1>
          </div>
          <div className="col-md-3 text-start">
            <ul>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/reset">reset user</Link>
              </li>
              <li>
                <Link to="/userinfo">User information</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>About</h4>
            <p className="text-start">
              We are moving forward from our start to take a mission. Our
              organization is a reputed organization in this city. I also have
              several nicknames. We are getting a lot from our customers. The
              main purpose of this is that we are one of the service providers
              in this city whose service man has never decreased but is
              increasing every day.
            </p>
          </div>
          <div className="col-md-3 social-links">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-google"></i>
            <i className="fab fa-google-play"></i>
            <br />
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram-square"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
