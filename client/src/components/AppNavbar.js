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
import { Link } from "react-router-dom";
import Logout from "./Logout";
import "../css/appnavbar.css";

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
        <Navbar color="dark" dark expand="sm" className="mb-5 appnavbar">
          <Container>
            <NavbarBrand>
              <NavLink tag={Link} to="/">
                Deep Roots
              </NavLink>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="">
                  <NavLink tag={Link} to="/gallery">
                    Gallery
                  </NavLink>
                </NavItem>

                <NavItem className="">
                  <NavLink tag={Link} to="/Associations">
                    Associations
                  </NavLink>
                </NavItem>

                {!this.props.loggedIn ? (
                  <>
                    <NavItem>
                      <NavLink tag={Link} to="/users/register">
                        Register
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to="/users/login">
                        Login
                      </NavLink>
                    </NavItem>
                  </>
                ) : (
                  <>
                    <NavItem>
                      <NavLink tag={Link} to="/protected">
                        Protected
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to="/dashboard">
                        Dashboard
                      </NavLink>
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
