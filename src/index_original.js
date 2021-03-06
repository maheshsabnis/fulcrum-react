import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// importing bootstrap
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';


// import the exported component
import App from './App';

import reportWebVitals from './reportWebVitals';
import SimpleCalculator from './calculator';

import ProductComponent from './components/productcomponent/productcomponent';
import ProductDynamicComponent from './components/productcomponent/productdynamiccomponent';
import ProductContextComponent from './components/productcomponent/productcontextcomponent';
import ProductHttpCallComponent from './components/productcomponent/producthttpcallcomponent';

import {BrowserRouter} from 'react-router-dom';
import ContainerComponent from './components/errorboundary/simpleerrorcheckcomponent';
import ContainerWithErrorBoundaryComponent from './components/errorboundary/errorboundarycomponent';
import LazyloadDemoComponent from './components/lazyloadcomponent/lazyloaddemocomponent';
import UseReducerComponent from './components/usereducerdemo/usereducercomponent';

const message = 'I am a message from the parent';

ReactDOM.render(
  <React.StrictMode>
    {/* The React JSX parser allows us to define the compile-time custom attributes
     to pass data and events across components 
     Here the 'msg' is a custom JSX attribute 
     The 'msg' attribute will be used as {props.msg} in App Component */}
    {/* <App  msg={message}/> */}
    {/* <BrowserRouter>
       <App/>
    </BrowserRouter>  */}
     <UseReducerComponent></UseReducerComponent>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
