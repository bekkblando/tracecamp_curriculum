import React from "react";
import useForm from "../hooks/useForm";

function Form(props) {
  const { value, handleSubmit, handleChange } = useForm();
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Blurb</label>
        <input
          type="text"
          className="form-control"
          name="blurb"
          value={values.blurb}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Backers</label>
        <input type="number" className="form-control" />
      </div>
      <div className="form-group">
        <label>Pledged</label>
        <input type="number" step="any" className="form-control" />
      </div>
      <input type="submit" value="Submit" className="form-control" />
    </form>
  );
}

export default Form;
