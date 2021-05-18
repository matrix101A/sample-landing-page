import React, { useEffect, useState } from "react";
import "./home-page.css";
import { Row, Col, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import ServiceTable from "./ServiceTable";
import Header from "./Header";
import Banners from "./Banners";
import FeatBlogs from "./FeatBlogs";
import Footer from "./Footer";
function HomePage() {
  var history = useHistory();
  var [gpsLocation, setGps] = useState({});
  const [location, setLocation] = useState("gps");
  const [number, setNumber] = useState();
  const locations = ["gps", "Lucknow", "Mumbai", "Delhi"];

  //setting user location using GPS

  //event handler for user location change

  const onLocationChange = (event) => {
    setLocation(locations[event.target.value]);
  };
  const onSignOut = () => {
    auth
      .signOut()
      .then(function () {
        document.querySelector("label").innerText = "Sucessfully signed out";
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  //user efffect to be executed whenever state changes or app re renders
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setNumber(user.phoneNumber);
      } else {
        history.push("/");
      }
    });
  }, [location, number]);
  return (
    <div className="content">
      <Header number={number} signOut={onSignOut} />
      <Banners location={location} />
      <div>
        <Container>
          <Row className="justify-content-center">
            <Col md={8} xs={9} className="location pt-3">
              <div>
                <Form inline>
                  <Form.Label
                    className="my-1 mr-2"
                    htmlFor="inlineFormCustomSelectPref"
                  >
                    <h4>Choose your Your Location</h4>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    className="my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    custom
                    onChange={onLocationChange}
                  >
                    <option value="0">My current location</option>
                    <option value="1">Lucknow</option>
                    <option value="2">Mumbai </option>
                    <option value="3">Delhi</option>
                  </Form.Control>
                </Form>
              </div>
            </Col>
          </Row>
          <hr />
          <Row className="justify-content-center mt-2 ">
            <Col md={8} xs={9} className="location">
              <div>
                <h4>
                  Last service : <a href="/profile">This is a dummy value </a>
                </h4>
              </div>
            </Col>
          </Row>
          <hr />

          <Row className="justify-content-center services mt-4">
            <Col xs={10}>
              <h4>Lsit of services offered in your area </h4>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <ServiceTable location={location} />
          </Row>
          <Row className="justify-content-center my-3">
            <Col md={4} xs={12}>
              <h3>Today's featured blogs</h3>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={8} xs={11}>
              <FeatBlogs />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
