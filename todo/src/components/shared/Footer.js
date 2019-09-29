import React from 'react';
import { Nav, Navbar, Container, NavbarBrand } from 'react-bootstrap';

import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
        <div className="Footer-header fixed-bottom">        
         <Navbar color="dark">
                <Container>
                    <NavbarBrand>Footer</NavbarBrand>
                </Container>
            </Navbar>
        </div>
    );
  }
}


export default Footer;
