import React from 'react'
import ReactDOM from "react-dom"
import App from 'js/app'
import 'scss/style.scss'
import store from "js/store/index"
import {Provider} from "react-redux"


ReactDOM.render(
  //  <Provider store={store}>
        <App />
        
 //   </Provider>
, 
document.querySelector('#root'))
