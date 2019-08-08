import React from "react";
import useForm from "../hooks/useForm";
import { createKick } from "../apiservice";

function Form(props) {
  const { values, handleSubmit, handleChange } = useForm(
    {
      blurb: null,
      backers: 0,
      pledged: 0,
      created: ""
    },
    sendData
  );

  function sendData() {
    const payload = values;
    const created = new Date();
    payload["created"] = created.toISOString();
    createKick(payload).then(res => {
      console.log(res);
    });
  }
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
        <input
          type="number"
          className="form-control"
          name="backers"
          value={values.backers}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Pledged</label>
        <input
          type="number"
          step="any"
          className="form-control"
          name="pledged"
          value={values.pledged}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value="Submit" className="form-control" />
    </form>
  );
}

export default Form;
