import { useState } from "react";
import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

const AddMovie = ({ onAddMovie }) => {
  const [inputValues, setInputvalues] = useState({
    title: "",
    description: "",
    rating: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    onAddMovie(inputValues);
    setInputvalues({
      title: "",
      description: "",
      rating: "",
    });
  };
  return (
    <Form onSubmit={submitHandler}>
      <h3>Add New Movie</h3>
      <InputGroup className="mb-3 w-50">
        <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
        <Form.Control
          placeholder="Enter movie title"
          aria-label="titles"
          aria-describedby="basic-addon1"
          value={inputValues.title}
          onChange={(e) => {
            setInputvalues({ ...inputValues, title: e.target.value });
          }}
        />
      </InputGroup>

      <InputGroup className="mb-3 w-50">
        <InputGroup.Text id="basic-addon1">description</InputGroup.Text>
        <Form.Control
          placeholder="Enter movie title"
          aria-label="description"
          aria-describedby="basic-addon1"
          value={inputValues.description}
          onChange={(e) => {
            setInputvalues({ ...inputValues, description: e.target.value });
          }}
        />
      </InputGroup>
      <InputGroup className="mb-3 w-50">
        <InputGroup.Text id="basic-addon1">rating</InputGroup.Text>
        <Form.Control
          type="number"
          min={1}
          step={0.1}
          placeholder="Enter movie title"
          aria-label="rating"
          aria-describedby="basic-addon1"
          value={inputValues.rating}
          onChange={(e) => {
            setInputvalues({ ...inputValues, rating: Number(e.target.value) });
          }}
        />
      </InputGroup>
      <Button variant="primary" type="submit">
        Add Movie
      </Button>
    </Form>
  );
};

export default AddMovie;
