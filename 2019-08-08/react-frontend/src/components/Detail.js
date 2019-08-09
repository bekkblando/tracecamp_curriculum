import React, { useState, useEffect } from "react";
import { getKick, deleteKick } from "../apiservice";
import { NavLink } from "react-router-dom";

function Detail(props) {
  const [kick, setKick] = useState({});
  const id = props.match.params.id;

  useEffect(() => {
    getKick(id).then(res => {
      setKick(res.data);
    });
  }, []);

  function handleClick() {
    deleteKick(id).then(res => {
      console.log(res);
      props.history.push(`/list/`); // Redirects to list
    });
  }

  return (
    <div className="container">
      <h1 className="text-center">Detail</h1>
      <h3>Blurb: {kick.blurb}</h3>
      <h3>Backers: {kick.backers}</h3>
      <h3>Pledged: {kick.pledged}</h3>
      <NavLink to={`/update/${kick.id}`} className="btn btn-primary">
        Update Kickstarter{" "}
      </NavLink>
      <button className="btn btn-danger" onClick={handleClick}>
        Delete Kickstarter
      </button>
    </div>
  );
}

export default Detail;
