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
      <Navbar
        color="rgba(193, 124, 124, 1)"
        dark
        expand="sm"
        className="appnavbar"
        sticky="top"
      >
        <Container>
          <NavbarBrand tag={Link} to="/">
            Deeproots
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="">
                <NavLink tag={Link} to="/gallery">
                  Gallery
                </NavLink>
              </NavItem>
              {/* <NavItem className="">
                <NavLink tag={Link} to="/courses">
                  Web Courses
                </NavLink>
              </NavItem> */}
              <NavItem className="">
                <NavLink tag={Link} to="/Associations">
                  Associations
                </NavLink>
              </NavItem>
              <NavItem className="">
                <NavLink tag={Link} to="/lifecoaching">
                  Life Coaching
                </NavLink>
              </NavItem>
              <NavItem className="">
                <NavLink tag={Link} to="/workshops">
                  Workshops
                </NavLink>
              </NavItem>
              {!this.props.loggedIn ? (
                <>
                  {/* <NavItem>
                    <NavLink tag={Link} to="/users/register">
                      Register
                    </NavLink>
                  </NavItem> */}
                  <NavItem>
                    <NavLink tag={Link} to="/users/login">
                      Login
                    </NavLink>
                  </NavItem>
                </>
              ) : (
                <>
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
    );
  }
}

export default AppNavBar;
