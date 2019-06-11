import React, {useState, useReducer, useEffect} from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"
import Nav from "./component/nav"
import Home from "./component/home";
import Test from "./component/test";
import Add from "./component/add";
import List from "./component/list";
import store from "../js/store/index"
import { addUrlList } from "../js/actions/index"

window.store = store;
window.addUrlList = addUrlList;


store.subscribe(() => console.log('Redux updated'))

const initialList = [];

export default function App() {

  const [list, dispatch] = useReducer(reducer, initialList)


  function reducer(list, action) {
    if(action.type == 'update') {
      return [...list, action.payload];
    }
    console.log(this.state)
  }

  useEffect(() => {
    console.log(store.getState())
    store.dispatch( addUrlList({test: 'ok'}))
    console.log(store.getState())
    let url = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/list`
    let result = fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
    dispatch({type: 'update', payload: result})
  }, [])

  return (
    <HashRouter>
    <div className="container">
      <div className="container__row">
        <div className="container__col-sm-12">
        <h2>Testing Functional react</h2>
        <Nav />
        </div>
      </div>
      <div className="container__row">
      <div className="content">
        <Route exact path="/" component={Home}/>
        <Route path="/test" component={Test}/>
        <Route path="/add" component={Add}/>
        <Route path="/list" component={List}/>
      </div>
      </div>
    </div>
    </HashRouter>
  )
}

