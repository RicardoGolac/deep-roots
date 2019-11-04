import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import { Link } from "react-router-dom";
import Logout from "./Logout";

class AppNavBar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const logout = () => {
      this.props.logout("/users/logout");
    };
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand>
              <Link to="/" exact>
                Deep Roots
              </Link>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/gallery">Gallery</Link>
                </NavItem>
                {!this.props.loggedIn ? (
                  <>
                    <NavItem>
                      <Link to="/users/register">Register</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/users/login">Login</Link>
                    </NavItem>
                  </>
                ) : (
                  <>
                    <NavItem>
                      <Link to="/protected">Protected</Link>
                    </NavItem>
                    <NavItem>
                      <Logout logout={logout} />
                    </NavItem>
                  </>
                )}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavBar;
