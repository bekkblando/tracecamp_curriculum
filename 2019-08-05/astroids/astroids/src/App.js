import React from 'react';
import './App.css';
import { getAstroids } from './nasaWorker';

function App() {

  getAstroids("2019-08-01", "2019-08-05").then(
    (data) => console.log(data),
    (error) => console.error(error)
  )

  return (
    <div className="App">
      Test
    </div>
  );
}

export default App;
