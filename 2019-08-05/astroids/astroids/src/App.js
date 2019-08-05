import React, { useState, useEffect } from 'react';
import './App.css';
import { getAstroids } from './nasaWorker';
import moment from 'moment';

function App() {

  const [ startDate, setStartDate ] = useState(moment().format("YYYY-MM-DD"));


  useEffect(() => {
    console.log("This is coming from the useEffect:", startDate);
  })


  // getAstroids("2019-08-01", "2019-08-05").then(
  //   (data) => console.log(data),
  //   (error) => console.error(error)
  // )

  return (
    <div className="App">
      Test
      <input value = {startDate.toString()} type="date" id="dt" onChange={ (e) => setStartDate(e.target.value)  }/>
    </div>
  );
}

export default App;
