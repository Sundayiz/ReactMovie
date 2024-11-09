import React from "react";

import Movie from "./Movie";
import { Row, Col, Container } from "react-bootstrap";

const MovieList = ({ movies }) => {
  return (
    <Container>
      <Row style={{ rowGap: "10px" }}>
        {movies.map((eachMovie) => {
          return (
            <Col key={eachMovie.id} xs={12} md={6} lg={3}>
              <Movie {...eachMovie} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MovieList;
