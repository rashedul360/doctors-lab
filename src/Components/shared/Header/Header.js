import React from "react";
import { Container, Nav, MenuBar, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div>
      {/* navbar  */}

      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ background: "#CED1DE", color: "black" }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Doctors Lab
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/services">
                services
              </Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>

            {/* login and registration part  */}
            <Nav>
              {!user.email && (
                <Nav.Link as={Link} to="/login">
                  login
                </Nav.Link>
              )}
              <Nav.Link as={Link} to="/register">
                {user.email ? (
                  <div>
                    {user.displayName} {"  "}
                    <img
                      style={{ width: "40px", borderRadius: "50%" }}
                      src={user.photoURL}
                      alt=""
                    />{" "}
                  </div>
                ) : (
                  "Registration"
                )}
              </Nav.Link>
              {/* redirect when logout  */}
              <Nav.Link as={Link} to="/login">
                {/* log out  */}
                <span className="mx-2">
                  {user.email && (
                    <button className="btn btn-danger" onClick={logOut}>
                      logout
                    </button>
                  )}
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
