import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate() // Hook for navigation
  const handleLogout = () => {
    if (sessionStorage.getItem('token')) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('loggedUser');
      navigate('/') // Redirect to home after logout
    }
  };

  return (
    <>
      <Navbar className="bg-success rounded-top">
        <Container className="p-1">
          <Navbar.Brand>
            <Link to={'/'} style={{ textDecoration: 'none' }} className="text-light">
              <FontAwesomeIcon
                icon={faStackOverflow}
                style={{ color: "#FFD43B" }}
                className="me-3"
              />
              Project Fair
            </Link>
          </Navbar.Brand>
          <button className="btn btn-warning" onClick={handleLogout}>
            <FontAwesomeIcon icon={faPowerOff} className="me-2" />
            Logout
          </button>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
