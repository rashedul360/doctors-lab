import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
const Footer = () => {
  return (
    <div>
      {/* footer part  */}
      <footer
        className="mt-5 p-4 "
        style={{ background: "#23282D", color: "white" }}
      >
        {/* logo with some information part  */}
        <div className="row align-items-center">
          <div className="col-md-3">
            <h1 as={Link} to="/">
              <i className="fas fa-user-nurse"></i> Doctors Lab
            </h1>
          </div>
          {/* some importanr links part */}
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
          {/* about this website part  */}
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
          {/* some social icons  */}
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
      {/* copyright section  */}
      <p className="text-center mb-0 bg-dark text-white">
        All &copy; all copyright reserved 2021 by{" "}
        <span>
          {" "}
          {/* designer or CEO or founder name  */}
          <a
            target="_blank"
            href="https://www.facebook.com/rashedulislam2004/"
            rel="noreferrer"
          >
            rashedul islam
          </a>
        </span>
      </p>
    </div>
  );
};

export default Footer;
