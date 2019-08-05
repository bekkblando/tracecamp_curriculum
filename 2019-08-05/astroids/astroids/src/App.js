import React, { useState, useEffect } from 'react';
import './App.css';
import { getAstroids } from './nasaWorker';
import moment from 'moment';
import { VictoryScatter, VictoryChart, VictoryTheme } from 'victory';

function App() {

  const [ startDate, setStartDate ] = useState(moment().subtract(1, 'week').format("YYYY-MM-DD"));
  const [ endDate, setEndDate ] = useState(moment().format("YYYY-MM-DD"));
  const [ astroidData, setAstroidData ] = useState([]);

  const [ graphData, setGraphData ] = useState([]);

  const parseAstroid = (astroid) => {
    return {x: Number(astroid.close_approach_data[0].miss_distance.miles), y: astroid.estimated_diameter.miles.estimated_diameter_max}
  }

  useEffect(() => {
    console.log(astroidData.map(parseAstroid))
    setGraphData(astroidData.map(parseAstroid))
  }, [astroidData])

  useEffect(() => {
    console.log("This is coming from the useEffect:", startDate, endDate);
    
    var closeAstroids = []
    getAstroids(startDate, endDate).then(
      (response) => {
        console.log(response.data.near_earth_objects)
        Object.entries(response.data.near_earth_objects).forEach((value) => {
          closeAstroids = closeAstroids.concat(value[1])
        })
      }).then(() => {
        setAstroidData(closeAstroids)
      })


  }, [startDate, endDate])

  
  return (
    <div className="App">
      Test
      <p>
        <input value = {startDate.toString()} type="date" id="start" onChange={ (e) => setStartDate(e.target.value)  }/>
      </p>
      <p>
        <input value = {endDate.toString()} type="date" id="end" onChange={ (e) => setEndDate(e.target.value)  }/>
      </p>

      <VictoryChart
        domain={{ x: [0, 42457944], y: [0, 2] }}
>
        <VictoryScatter
          style={{ data: { fill: "#c43a31" } }}
          size={2}
          data={graphData}
        />
      </VictoryChart>
    </div>
  );
}

export default App;
