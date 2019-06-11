import React from "react";
import {NavLink} from "react-router-dom"
import './index.scss';

export default function Nav() {
  return (
    <div className="nav__container">
      <ul className="nav__list">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/test">Test</NavLink></li>
        <li><NavLink to="/add">Add</NavLink></li>
        <li><NavLink to="/list">List</NavLink></li>
      </ul>
    </div>
  )
}
