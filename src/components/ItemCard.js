import React from "react";
import { Card } from "react-bootstrap";
function ItemCard(props) {
  return (
    <Card style={{ width: "100%", height: "550px" }}>
      <Card.Img variant="top" src={props.service.image} />
      <Card.Body>
        <Card.Title>{props.service.title}</Card.Title>
        <Card.Text>{props.service.desc}</Card.Text>
      </Card.Body>

      <Card.Body>
        <Card.Link href="#">View all services</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;
