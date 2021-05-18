import React, { useState, useEffect } from "react";
import { Carousel, Container } from "react-bootstrap";
import "./banners.css";
import { storage } from "../firebase";

function Banners(props) {
  const [images, setImage] = useState(["hello"]);

  useEffect(() => {
    var listRef = storage.ref(props.location + "/Advertisements/");

    listRef
      .listAll()
      .then(function (res) {
        var temp = [];
        res.items.forEach(function (itemRef) {
          itemRef
            .getDownloadURL()
            .then(function (url) {
              temp = [...temp, url];

              setImage(temp);
            })
            .catch(function (error) {
              console.log(error);
            });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    //fetching url for some data
  }, [props.location]);

  return (
    <Container fluid className="banner">
      <Carousel>
        {images.map((image) => {
          return (
            <Carousel.Item interval={3000}>
              <img className="d-block w-100" src={image} alt="First slide" />
              <Carousel.Caption>
                <h3> Featured Services in your area </h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}
export default Banners;
