import React, { useState, useContext } from "react";

const ExampleContext = React.createContext();

function ExampleProvider(props) {
  const [num, setNum] = useState(7);
  const aObj = { number: num, addOne: () => setNum(num + 1) };
  return (
    <ExampleContext.Provider value={aObj}>
      {props.children}
    </ExampleContext.Provider>
  );
}

function One(props) {
  const mynum = useContext(ExampleContext);
  return (
    <div>
      <h1>{mynum.number}</h1>
      <button onClick={mynum.addOne}>Add One</button>
    </div>
  );
}

function Two(props) {
  return (
    <div>
      <One />
    </div>
  );
}

function Pass() {
  return (
    <div>
      <h1>Context API Example</h1>
      <ExampleProvider>
        <Two />
      </ExampleProvider>
    </div>
  );
}

export default Pass;
