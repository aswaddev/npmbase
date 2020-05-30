import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

class Header extends React.Component {
  state = {
    isOpen: false,
  };

  toggle = () => this.setState(!this.state.isOpen);

  render() {
    return (
      <Navbar dark expand='md' style={{ backgroundColor: '#4052B6' }}>
        <Container>
          <NavbarBrand href='/'>NPM Base</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink href='#' active>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>My Favorites</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
