import React from "react";
import "./footer.css";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaWhatsappSquare,
  FaCopyright,
} from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  return (
    <div className="footer">
      <div>
        <Container fluid="md" className="logo">
          <Row className="justify-content-center justify-content-md-center p-2">
            <Col md={1} xs={2} className="my-4">
              <a
                href="https://www.facebook.com"
                rel="noreferrer"
                target="_blank"
              >
                <FaFacebook size={50} color="white" />
              </a>
            </Col>
            <Col md={1} xs={2} className="my-4">
              <a href="https://www.m.me" rel="noreferrer" target="_blank">
                <FaFacebookMessenger size={50} color="white" />
              </a>
            </Col>
            <Col md={1} xs={2} className="my-4">
              <a
                href="https://web.whatsapp.com"
                rel="noreferrer"
                target="_blank"
              >
                <FaWhatsappSquare size={50} color="white" />
              </a>
            </Col>
          </Row>

          <div className="credits">
            <Row className="justify-content-center justify-content-md-center pb-2">
              <Col>
                <Typography variant="outline" gutterBottom>
                  Developed by <strong>Abhinav Tiwari </strong>
                </Typography>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
