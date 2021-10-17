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
          <div className="col-md-3">
            <ul>
              <li>
                <p href="">item number1</p>
              </li>
              <li>
                <p href="">item number2</p>
              </li>
              <li>
                <p href="">item number3</p>
              </li>
              <li>
                <p href="">item number4</p>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>About</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium architecto, soluta veritatis recusandae error culpa
              suscipit debitis deleniti ad? Quo ullam minus cum porro nihil
              sapiente blanditiis qui laudantium reiciendis.
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
