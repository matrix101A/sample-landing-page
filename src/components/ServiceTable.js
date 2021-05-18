import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./banners.css";
import { db } from "../firebase";
import ItemCard from "./ItemCard";
function ServiceTable(props) {
  const [services, setServices] = useState([{ title: "", desc: "" }]);
  useEffect(() => {
    var docRef = db.collection("services").doc(props.location);

    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setServices(doc.data().offered);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, [props.location]);

  return (
    <Container>
      <Row className="justify-content-center">
        {services.map((service) => {
          return (
            <Col md={4} xs={12} className="my-3">
              <ItemCard service={service} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default ServiceTable;
