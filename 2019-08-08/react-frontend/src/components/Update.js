import React, { useState, useEffect } from "react";
import Form from "./Form";
import { getKick } from "../apiservice";

function Update(props) {
  const [kick, setKick] = useState({});

  useEffect(() => {
    const id = props.match.params.id;
    getKick(id).then(res => {
      setKick(res.data);
    });
  }, []);

  return (
    <div className="container">
      {kick.id ? (
        <div>
          <h1 className="text-center">Update KickStarter {kick.id}</h1>
          <Form form_data={kick} form_id={kick.id} />
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
}

export default Update;
