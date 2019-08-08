import React, { useState, useEffect } from "react";
import { getKick } from "../apiservice";

function Detail(props) {
  const [kick, setKick] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = props.match.params.id;
    getKick(id).then(res => {
      setKick(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Detail</h1>
    </div>
  );
}

export default Detail;
