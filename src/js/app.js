import React, {useState} from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"
import Nav from "./component/nav"
import Home from "./component/home";
import Test from "./component/test";
import Add from "./component/add";

export default function App() {
  return (
    <HashRouter>
    <div>
      <h2>Testing Functional react</h2>
      <Nav />
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route path="/test" component={Test}/>
        <Route path="/add" component={Add}/>
      </div>
    </div>
    </HashRouter>
  )
}

