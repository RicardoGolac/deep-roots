import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class AppNavBar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  // The Link towards Sponsor extention goes into the double quotes of line #37. -Sandro

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Deep Roots</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>

              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href=""> 
                    Sponsors
                  </NavLink>
                </NavItem>
              </Nav>
              
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/RicardoGolac/deep-roots">
                    Github
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavBar;
