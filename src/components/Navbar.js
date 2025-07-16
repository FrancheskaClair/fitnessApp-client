import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserContext from '../UserContext';

import { useContext } from 'react';

import { Link, NavLink } from 'react-router-dom'

import '../index.css';

export default function NavbarApp() {

  const {user} = useContext(UserContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top p-3" id="nav">
      <Container>
        <Navbar.Brand as={Link} to="/">WellSync</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex d-grid gap-5">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {(user.id !== null) 
                        
              ? 
                <>
                  <Nav.Link as={NavLink} to="/workouts" exact="true">Workouts</Nav.Link>
                  <Nav.Link as={Link} to="/aboutUs">About Us</Nav.Link>
                  <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                </>
              : 
                <>
                  <Nav.Link as={Link} to="/aboutUs">About Us</Nav.Link>
                  <Nav.Link as={Link} to="/login">Login</Nav.Link>
                  <Nav.Link as={Link} to="/register">Sign Up</Nav.Link>
                </>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

