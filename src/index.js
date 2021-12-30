import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

// importing bootstrap
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import required object for React-Redux application

// 1. the createStore()
import { createStore } from "redux";

// 2.  the reducers
import reducers from "./reduxapp/reducers/reducers";

// 3. the Provider
import { Provider } from "react-redux";

import MainReduxComponent from "./reduxapp/mainreduxcomponent";

import reportWebVitals from "./reportWebVitals";

// 4. Create store that will be monitored by reducers for any Read/Write operations
// NOTE: For development purpose simulate the Redux Dev Tools provided they are installed
// as Browser Plug-In
// window.__REDUX_DEVTOOLS_EXTENSION__: Detect if the extension installed in Browser
// window.__REDUX_DEVTOOLS_EXTENSION__(): the extension method that will log the Redux Store, and Dispatched actions

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// 5. Link the MainReduxComponent to Redux Store using <Provider store={store}>
// The React Component will use the Redux store
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainReduxComponent></MainReduxComponent>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
