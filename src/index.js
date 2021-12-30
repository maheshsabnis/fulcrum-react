import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

// importing bootstrap
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import required object for React-Redux application

// 1. the createStore() and applyMiddleware , this will be used for managing
// asynchronous operations from the action method that is dispatched from the
// component
import { createStore, applyMiddleware } from "redux";

// 2.  the reducers
import oneReducer from "./reduxthunk/reducres/reducers";
// 3. the Provider
import { Provider } from "react-redux";

// 4. import the Main Component
import MainReduxThunkComponent from "./reduxthunk/mainreduxthunkcomponent";

// 5: import the redux-thunk
// the thunk object will manage and monitor all async calls
// using Redux Middleware Infrastructure configured using
// applyMiddleware() method  
import thunk from 'redux-thunk';


// 6. import Redux-Dev-Tools extensions that will log the redux in browser
// NOTE: Use it in Dev. Mode
// composeWithDevTools() this method will configure the DEVTOOLS and
// middleware in store as a single object 

import {composeWithDevTools} from  'redux-devtools-extension';

import reportWebVitals from "./reportWebVitals";

// 6. Create store that will be monitored by reducers for any Read/Write operations
 
let store = createStore(
  oneReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// 5. Link the MainReduxComponent to Redux Store using <Provider store={store}>
// The React Component will use the Redux store
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainReduxThunkComponent></MainReduxThunkComponent>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
