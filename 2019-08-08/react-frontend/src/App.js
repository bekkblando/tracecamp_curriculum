import React from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Navlink to="/">Home</Navlink>
          <Navlink to="/create/">Create</Navlink>
          <NavLink to="/list/">List</NavLink>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/create/" exact component={Create} />
        <Route path="/list/" exact component={List} />
        <Route path="/detail/:id" exact component={Detail} />
        <Route path="/update/:id" exact component={Update} />
      </Router>
    </div>
  );
}

export default App;
