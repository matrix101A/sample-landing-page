import firebase from "../firebase";
import { Col, Row, Container, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import hardCoded from "./hardCoded.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

function Home() {
  const [value, setValue] = useState("+91");
  const [check, setCheck] = useState(false);
  const [otpSent, sentOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [object, setObject] = useState({});
  const handleChange = (event) => {
    if (event.target.type === "checkbox") {
      setCheck(event.target.checked);
    } else {
      if (event.target.value.length < 4) setValue("+91");
      else {
        setValue(event.target.value);
      }
    }
  };
  const handleChangeOtp = (event) => {
    if (otpSent) {
      setOtp(event.target.value);
    } else setOtp("");
  };
  const history = useHistory();

  const handleLogin = (event) => {
    event.preventDefault();
    let code = otp;

    if (code == null) return;
    if (!check) {
      document.querySelector("label").textContent =
        "Please agree to the terms and conditions";

      document.querySelector("label").style.color = "red";
      return;
    }
    object
      .confirm(code)
      .then(function (result) {
        history.push("/details");
      })
      .catch((error) => {
        document.querySelector("label").textContent =
          "INVALID OTP , Please try again ";

        document.querySelector("label").style.color = "red";
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.length !== 13) {
      document.querySelector("label").textContent = "Invalid mobile number  ";
      document.querySelector("label").style.color = "red ";
      return;
    }

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("submit", {
      size: "invisible",
    });

    let number = value;
    var appVerifier = window.recaptchaVerifier;

    firebase
      .auth()
      .signInWithPhoneNumber(number, appVerifier)
      .then((e) => {
        setObject(e);

        document.querySelector("label").textContent =
          "OTP has sucessfully been sent to your mobile number ";
        sentOtpSent(true);
      })
      .catch((error) => {
        document.querySelector("label").textContent =
          error.message + " please recheck your mobile number";
        document.querySelector("label").style.color = "red";
        return;
      });
  };

  return (
    <Container>
      <Row className="otp justify-content-center my-4">
        <Col md={8} xs={12}>
          <Form className="form">
            <h5>Login/Signup</h5>
            <label className="message"></label>
            <Form.Group>
              <Form.Label>{hardCoded.text[1]}</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter number"
                id="phone-number"
                name="phone-number"
                value={value}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              id="submit"
              value="Request OTP "
              onClick={handleSubmit}
            >
              Request OTP
            </Button>

            <Form.Group className="mt-5">
              <Form.Label>{hardCoded.text[2]}</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter OTP"
                id="enter-otp"
                name="enter-otp"
                value={otp}
                onChange={handleChangeOtp}
              />
              <Form.Group as={Row} controlId="formHorizontalCheck">
                <Col>
                  <input
                    label="Agree to terms and conditions"
                    name="tnc"
                    id="tnc"
                    value="tnc"
                    type="checkbox"
                    onChange={handleChange}
                  />
                  <Form.Label className="mx-2">
                    <a href="/tnc" target="blank">
                      I agree to the terms and conditions
                    </a>
                  </Form.Label>
                </Col>
              </Form.Group>
            </Form.Group>
            <Button type="submit" value="Verify" onClick={handleLogin}>
              Verify
            </Button>
            <br />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
