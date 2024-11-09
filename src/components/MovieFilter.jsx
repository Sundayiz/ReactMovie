import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const MovieFilter = ({ onTitleChange, onRatingChange }) => {
  return (
    <div>
      <h3>Filter Title</h3>
      <InputGroup className="mb-3 w-50">
        <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
        <Form.Control
          placeholder="Enter movie title"
          aria-label="titles"
          aria-describedby="basic-addon1"
          onChange={(e) => {
            onTitleChange(e.target.value);
          }}
        />
      </InputGroup>
      <h3>Filter Rating</h3>
      <InputGroup className="mb-3 w-50">
        <InputGroup.Text id="basic-addon1">Rating</InputGroup.Text>
        <Form.Control
          type="number"
          min={1}
          step={0.1}
          placeholder="Enter movie title"
          aria-label="rating"
          aria-describedby="basic-addon1"
          onChange={(e) => {
            onRatingChange(e.target.value);
          }}
        />
      </InputGroup>
    </div>
  );
};

export default MovieFilter;
