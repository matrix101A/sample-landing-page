import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

function FillDetails() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  const onClickNext = (e) => {
    e.preventDefault();
    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("Name updated sucessfully ");
      })
      .catch(function (error) {
        console.log(error);
      });
    user
      .updateEmail(email)
      .then(function () {
        console.log("Email updated sucessfully ");
        history.push("/profile");
      })
      .catch(function (error) {
        if (email === "") {
          history.push("/profile");
        } else {
          console.log(error);
          document.querySelector("label").textContent = error;
          document.querySelector("label").style.color = "red";
        }
      });
  };
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    auth.onAuthStateChanged(function (u) {
      if (u) {
        setUser(u);
      } else {
        history.push("/");
      }
    });
    if (user) {
      if (user.displayName != null || user.email != null)
        history.push("/profile");
    }
  });

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center justify-content-center ">
          <Form className="form">
            <h3>Enter your personal details(optional)</h3>
            <label className="label"></label>
            <Form.Group controlId="formGroupName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={changeName}
              />
            </Form.Group>
            <Form.Group controlId="formGroupMail ">
              <Form.Label>Mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                value={email}
                onChange={changeEmail}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={onClickNext}>
              Next
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default FillDetails;
