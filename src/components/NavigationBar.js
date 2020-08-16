import React, { useState, useContext, useEffect } from "react";
import Logo from "../assets/Img/graduation_logo.png";
import { TiHome } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import { Md3DRotation } from "react-icons/md";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SignUpContext } from "./SignUpContext";

import "../assets/Css/style.css";
const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  .nav-item {
    padding-top: 5px;
    padding-right: 7px;
    padding-bottom: 5px;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;
    padding-top: 15px;
    &:hover {
      color: white;
    }
  }
`;


function NavigationBar(props) {

  
  const logged = useContext(SignUpContext);
  const [name, setName] = useState("");

  useEffect((e) => {
    setName(logged.name);
  });

  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <div>
            <img className="navLogo" src={Logo} alt="NavLogo" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link>
                <Link to="/">
                  <TiHome className="fontEdit" />
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item >
              <Nav.Link>
                <Link >
                
                  <a  href="https://hungry-bohr-401e0f.netlify.app/"  target='_blank'>
     <Md3DRotation className="fontEdit" /></a>
                </Link>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <Link to="/trips">رحلات</Link>
              </Nav.Link>
            </Nav.Item>

            {
              logged.email !== 'mahmoud@gmail.com' &&(<Nav.Item>
              <Nav.Link>
                <Link to="/booking">حجز</Link>
              </Nav.Link>
            </Nav.Item>)
            }
            


            {!logged.isLoggedIn ? (
              <React.Fragment>
                <Nav.Item>
                  <Link to="/login">
                    <Button variant="outline-warning ">تسجيل الدخول</Button>
                  </Link>
                </Nav.Item>

                <Nav.Item>
                  <Link to="/signup">
                    <Button variant="warning " ClassName="rounded-pill">
                      اشتراك
                    </Button>
                  </Link>
                </Nav.Item>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Nav.Item>
                  <Nav.Link>
                    <Link to="/profile">
                      {/* <FaUserCircle className="fontEdit" /> */}
                      {name}
                    </Link>
                  </Nav.Link>
                </Nav.Item>
              </React.Fragment>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default NavigationBar;
