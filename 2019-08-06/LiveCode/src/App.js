import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Example from "./components/Example";
import Counter from "./components/Counter";
import Form from "./components/Form";
import List from "./components/List";
import Pass from "./components/Pass";
import Pages from "./components/Pages";

function App() {
  // const msg = "This is a new message";
  // const name = "Me";
  // const msg01 = `Good Morning ${name}`;
  return (
    <div className="App">
      <Pages />
    </div>
  );
}

export default App;
