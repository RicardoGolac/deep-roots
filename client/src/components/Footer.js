import React from "react";
import "../css/footer.css";
import { Container, Nav, NavItem } from "reactstrap";

function Footer() {
  return (
    <div className="footer-view-container">
      <div className="footer-container">
        <Nav justified>
          <NavItem eventKey={1}>Privacy policy</NavItem>
          <NavItem eventKey={2} title="Item">
            Terms & Conditions
          </NavItem>
          <NavItem eventKey={3}>Some other professional link</NavItem>
        </Nav>
        <div className="text-center small copyright">© Deep Roots</div>
      </div>
    </div>
  );
}

export default Footer;
