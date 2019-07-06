import React from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './components/Index';
import Create from './components/Create';
import List from './components/List';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/create/">Create Kickstarter Datum</Link>
              </li>
              <li>
                <Link to="/list/">Kickstarter Funds</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/create/" component={Create} />
          <Route path="/list/" component={List} />
        </div>
      </Router>
    </div>
  );
}

export default App;
