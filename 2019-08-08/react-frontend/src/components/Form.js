import React from "react";
import useForm from "../hooks/useForm";
import { createKick, updateKick } from "../apiservice";

function Form(props) {
  const data = props.form_data;
  const { values, handleSubmit, handleChange, setValues } = useForm(
    props.form_data,
    sendData
  );

  function sendData() {
    const payload = values;

    if (props.form_id) {
      console.log("UPDATE");
      payload["created"] = data.created;
      const id = data.id;
      payload["id"] = id;
      updateKick(payload, id).then(res => {
        console.log(res);
        setValues({
          blurb: "",
          backers: 0,
          pledged: 0,
          created: ""
        });
      });
    } else {
      console.log("CREATE");
      const created = new Date();
      payload["created"] = created.toISOString();
      createKick(payload).then(res => {
        console.log(res);
        setValues({
          blurb: "",
          backers: 0,
          pledged: 0,
          created: ""
        });
      });
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Blurb</label>
        <input
          type="text"
          className="form-control"
          name="blurb"
          placeholder={data.blurb}
          value={values.blurb}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Backers</label>
        <input
          type="number"
          className="form-control"
          name="backers"
          placeholder={data.backers}
          value={values.backers}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Pledged</label>
        <input
          type="number"
          step="any"
          className="form-control"
          name="pledged"
          placeholder={data.pledged}
          value={values.pledged}
          onChange={handleChange}
          required
        />
      </div>
      <input type="submit" value="Submit" className="form-control" />
    </form>
  );
}

export default Form;
