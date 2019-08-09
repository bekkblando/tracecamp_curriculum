import React from "react";
import Form from "./Form";

function Create() {
  const newKick = {
    blurb: null,
    backers: 0,
    pledged: 0,
    created: ""
  };
  return (
    <div className="container">
      <h1 className="text-center">Create</h1>
      <Form form_data={newKick} />
    </div>
  );
}

export default Create;
