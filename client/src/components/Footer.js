import React from "react";
import "../css/footer.css";
import { Nav, NavItem, Container, Row, Col } from "reactstrap";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="footer-view-container">
      <div className="footer-container">
        <Container>
          <Row>
            <Col>
              <SocialIcon url="https://www.facebook.com/deepwellstudio/" />
            </Col>
            <Col>
              <SocialIcon url="https://www.instagram.com/turbadomarabou" />
            </Col>
            <Col>
              <SocialIcon url="https://www.linkedin.com/in/turbado-marabou-a31b4028" />
            </Col>
          </Row>
          <div className="text-center small copyright">
            © Deeproots Arts & Culture Creative Services LLC
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
