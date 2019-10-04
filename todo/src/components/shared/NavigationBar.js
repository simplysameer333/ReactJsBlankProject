import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import './NavigationBar.css';

export const NavigationBar = () => (
    <Navbar expand="lg" className="navbar-custom">
      <Navbar.Toggle aria-controls="basic-navbar-nav"  />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ml-auto navbar-collapse order-1 order-md-0 dual-collapse2" >
          <Nav.Item>
            <Nav.Link className = "nav-link-custom" as={Link} to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
             <Nav.Link className = "nav-link-custom" as={Link} to="/inputEmployee">Add Employee</Nav.Link>
          </Nav.Item>
          <Nav.Item>
             <Nav.Link className = "nav-link-custom" as={Link} to="/employeesInfo">Employees Info</Nav.Link>
          </Nav.Item>
          <Nav.Item>
             <Nav.Link className = "nav-link-custom" as={Link} to="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
             <Nav.Link className = "nav-link-custom" as={Link} to="/contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)
