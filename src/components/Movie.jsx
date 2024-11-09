import React from "react";
import { Card, Button } from "react-bootstrap";

const Movie = ({ id, title, description, rating }) => {
  return (
    <div>
      <Card style={{ height: "400px" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Text>{title}</Card.Text>
          <Card.Text>Description: {description}</Card.Text>
          <Card.Text>RSating: {rating}</Card.Text>

          <Button variant="primary">Buy now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Movie;
