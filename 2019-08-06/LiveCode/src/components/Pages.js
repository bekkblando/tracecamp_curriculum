import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

function Pages() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/about/">About</NavLink>
          <NavLink to="/contact/">Contact</NavLink>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default Pages;
