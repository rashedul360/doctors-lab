import React from "react";
import { Container, Nav, MenuBar, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      {/* navbar  */}

      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ background: "#23282D", color: "white" }}
      >
        <Container>
          {/* website name */}
          <NavLink to="/">
            <h3>
              <i className="fas fa-user-nurse"></i> Doctors Lab
            </h3>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* important pase shortcut  */}
            <Nav className="me-auto">
              <NavLink to="/doctors">Doctors</NavLink>
              <NavLink as={Link} to="/reset">
                Reset
              </NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/brances">Brances</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </Nav>

            {/* login and registration part  */}
            <Nav>
              {!user.email && <NavLink to="/login">login</NavLink>}
              <NavLink as={Link} to="/register">
                {user.email ? (
                  <>
                    {user.displayName} {"  "}
                    <img
                      style={{ width: "40px", borderRadius: "50%" }}
                      src={user.photoURL}
                      alt="user photo"
                    />{" "}
                  </>
                ) : (
                  "Registration"
                )}
              </NavLink>
              {/* redirect when logout  */}
              {user.email && (
                <Link
                  to="/userinfo"
                  className="d-flex justify-content-center align-items-center"
                >
                  <span>
                    {" "}
                    <i className="fas fa-user"></i>
                  </span>
                  {"  - "}
                  Dashboard
                </Link>
              )}
              <NavLink to="/login">
                {/* log out  */}
                <span className="mx-2">
                  {user.email && (
                    <button className="btn btn-danger" onClick={logOut}>
                      <i className="fas fa-sign-out-alt"></i> logout
                    </button>
                  )}
                </span>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
