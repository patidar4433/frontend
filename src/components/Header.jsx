import React from "react";
import logo from "../img/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const user = localStorage.getItem("user");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setTimeout(() => {
      navigate("/");
    }, 500);
  };
  return (
    <div>
      {user ? (
        <Navbar
          className="main_header_bg1"
          style={{ borderBottom: "1px solid #ebe8e8" }}
          expand="lg"
        >
          <Container className="header_bg">
            <Navbar.Brand className="sign">
              <img src={logo} alt="" />
              Code<span>Unit</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="navigation">
              <Nav className="me-auto nav_menu_2">
                <Nav.Link>
                  <Link to="/explore">Explore</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/problems">Problems</Link>
                </Nav.Link>
                <Nav.Link>
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title="My Profile"
                      menuVariant="light"
                      className="profile"
                    >
                      <NavDropdown.Item className="userLogin">
                        <Link to="/myprofile">
                          <span> {JSON.parse(user).response[0].firstname}</span>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item className="userLogin">
                        <Link onClick={handleLogout}>Log out</Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar className="main_header_bg" expand="lg">
          <Container className="header_bg">
            <Navbar.Brand className="sign1">
              <img src={logo} alt="" />
              Code<span>Unit</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="navigation">
              <Nav className="me-auto nav_menu">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/signin">Sign In</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/signup">Create Account</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/compo">Compo</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default Header;
