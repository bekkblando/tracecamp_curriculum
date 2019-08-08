import React, { useState, useEffect } from "react";
import { listKick } from "../apiservice";
import { NavLink } from "react-router-dom";

function List() {
  const [kicks, setKicks] = useState([]);

  useEffect(() => {
    listKick().then(res => {
      setKicks(res.data);
    });
  }, []);
  return (
    <div className="container">
      <h1 className="text-center">List</h1>
      <ul className="list-group">
        {kicks.map(item => (
          <NavLink key={item.id} to={`/detail/${item.id}`}>
            <li className="list-group-item">{item.blurb}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default List;
