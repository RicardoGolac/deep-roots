import React from "react";
import "../css/footer.css";
import { Nav, NavItem } from "reactstrap";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="footer-view-container">
      <div className="footer-container">
        <Nav justified>
          <NavItem eventKey={1}>
            <SocialIcon url="https://www.facebook.com/deepwellstudio/" />
          </NavItem>
          <NavItem eventKey={2}>
            <SocialIcon url="https://www.instagram.com/turbadomarabou" />
          </NavItem>
          <NavItem eventKey={3}>
            <SocialIcon url="https://www.linkedin.com/in/turbado-marabou-a31b4028" />
          </NavItem>
        </Nav>
        <div className="text-center small copyright">© Deeproots Creative</div>
      </div>
    </div>
  );
}

export default Footer;
