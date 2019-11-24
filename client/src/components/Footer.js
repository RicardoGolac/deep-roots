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
            <SocialIcon url="https://www.youtube.com/" />
          </NavItem>
          <NavItem eventKey={2} title="Item">
            <SocialIcon url="https://www.instagram.com/" />
          </NavItem>
          <NavItem eventKey={3}>
            <SocialIcon url="https://twitter.com/home?lang=en" />
          </NavItem>
          <NavItem eventKey={4}>
            <SocialIcon url="https://www.pinterest.com" />
          </NavItem>
        </Nav>
        <div className="text-center small copyright">© Deep Roots Creative</div>
      </div>
    </div>
  );
}

export default Footer;
