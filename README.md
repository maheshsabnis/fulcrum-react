# React Application Development

1. Install The React CLI
    - npm install -g create-react-app
2. Create The React Application using CLI
    - create-react-app [APPLICATIOn-NAME]
        - create-react-app my-react-app

3. Folder Structure
    - The 'node_modules'
        - Folder that contains all dependency packages those are used for development, compile, build, test and run the react application
    - The 'src' folder 
        - Folder that contains React application files
    - The 'public' folder
        - Folder that contains build output
    - The 'package.json' file
        - The file that contains application development and testing dependencies (devDependencies), runtime dependencies (dependencies)
        - The 'script' commands
            - Running command, 'start', the command will be 'npm run start'
            - Build command, 'build', the command will be 'npm run build'
            - Test command, 'test', the command will be 'npm run test'   
# React.js Object Model

1. The 'react', the base object model aka, the react library
    - Defines component
        - The 'class component', the ES 6 class derived from 'Component' base class
        - The 'functional component', new and recommended from React 16.0+
    - Define Hooks (VERY-IMPORTANT-CONCEPT)
        - New Concept from React 16.8+
            - A JavaScript Function that is having predefined behavior     
2. The 'react-dom', the package that is used to Rendering and Mounting the Component in Browser
    - Provide the 'ReactDOM' object that has the 'render()' method to render and 'MOUNT' the UI in HTML page that is executed browser          
    - Manages the Mounting of UI using the HTML Container element e.g. div tag   

# Packages those are installed using REACT CLI

1. react-scripts
    - The package is used to Compile, Build, Run, test and Host React Application      
2. web-vitals
    - The package used by theReact CLI for managing the Compilation and Build Process
3. @testing-library/react
    - The React Testing Environment      
    - Allows to Unit Test The React UI
4. @testing-library/jest-dom
    - An integration with 'Jest', a JavaScript Framework to Unit Test JavaScrip apps
5. @testing-library/user-event
    - Test an Event that is raised on React Component's UI e.g. Click event on the button   

# JSX In React
1. The XML Extensions (Rule-Sets) for React Application Development
    - Each HTML DOM element is the JSX HTML Element Object
    - e.g.
        - The 'div' is HtmlDivElement
        - The 'input' is HtmlInputElement
2. The JSX is a new 'Compiler' that compiles the React.js Component's Code using new attribute
    - input:text
        - input type="text" value="xyz" name="txt" id="t1" class="c1"
    - The JSX has HtmlInputElement as a class and each attribute is JSX Attribute property
        - The 'name'
        - The 'id'
        - The 'value'
        - The 'className' instead of 'class' because the 'class' is standard ES 6 keyword         
    - The JSX Event attributes
        - OnClick, OnChange, OnKeyUp
3. All Attributes are case-sensitive
4. For each HTML-Element the closing tag is mandatory   

# React.js Object Model for Application Development aka coding
1. Component
    - An Autonomous Object that has
        - UI
        - Data
        - Behavior (Events and Logic)
    - The UI is generated based in 'Data'
    - The UI is updated based in Events     
    - The Class Component
        - The class derived from ES 6 'Component<P,S>' base class    
        - 2-Types of class Components
            - Stateless Component
                - This has only UI and No data but may have events
            - Stateful Component
                - Used in Line-of-Business (LOB) apps
                - They have data to update the UI based on Events
        - Component<P,S>
            - The 'S' is a local state of the component
            - The Values only used inside a component only
            - When the component is unloaded the State will be void (useless)
            - The State is declared using the 'state' JSON property of the 'Component' base class
                - this.state={
                    PROPERTY-NAME:INITIAL-VALUE
                }
            - The state of the component can be updated using the 'setState()' method of the component
                - this.setState({'PROPERTY-NAME': 'THE-NEW-VALUE'},CALL-BACK-FUNCTION-TO-COMMIT-THE-STATE-PROPERTY-UPDATE) ;
           - The 'P', is the 'props', the data that is received from the 'Parent-Component'     
           - The 'props' is an object that will be 'live' throughout the life of React Application that is loaded in browser          
        - The State is for a component only and will be void when component is unloaded or unmounted (aka removed from DOM) where is the 'props' is always live 
            - The 'state' is mutable (kill-able)
            - The 'props' is immutable (Forever-Live)
        - Methods
            - The 'constructor(props)'
                - Used to initialize the state properties
            - The 'render()' 
                - Contains HTML code for the component with data binding and events
            - The 'componentDidMount()'
                - The method that will be executed after the 'render()' method       
            - The 'shouldComponentUpdate()'
                - If the 'state' is changed then this method will return 'true' and the 'render()' method will be invoked to update the DOM based in 'Virtual DOM' 
                - The DOM will be changed only for the state property that is been updated   
            - componentWillUnMount()
                - Unload the component from DOM
            - componentDidCatch(error)
                - If any component throws an exception then it will be handled and instead of crashing UI the fallback UI will be displayed (rendered)       
        - Functional Components             
            - Introduced in React 16.0
            - Recommended from React 16.8
            - Class Components are nor deprecated, but all fresh development is in functional components  
            - It is a JavaScript function that returns HTML
                - Syntax:
                    - function [COMPONENT-NAME] (props){
                        ....... logic method
                        return (HTML-DOM);
                    }
                    - const [COMPONENT-NAME](props)=> {
                        .......logic methods
                        return (HTML-DOM)
                    } 

                    - const [COMPONENT-NAME]=()=>(
                        return (HTML-DOM)
                    )
2. The 'src' folder file structure
    - App.js
        - A default component
    - index.js
        - The file that contains code to mount and render the App.js (or other components) in index.html page of 'public' folder
``` javascript
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
    - ReactDOM.render()
        - ReactDOM an object from 'react-dom' package
        - This will mount the 'App' component in the HTML element  with id as 'root' on index.html
``` javascript
"scripts": {
    "start": "react-scripts start",  // build and host the react application 
    "build": "react-scripts build", // build the project and will generate the build filed
    "test": "react-scripts test",  // test the react application
    "eject": "react-scripts eject" // manage the package updates 
  }
```

# Programming with Functional Components
    - The Component without any Data but just having events bound to HTMl Elements
 ``` javascript
import logo from './logo.svg';
import './App.css';

function App() {

  // method of the component that will be bound with HTML element
  const helloClick =()=>{
    alert('I am Clicked');
  };
  return (
    <div className="App">
       <h1>The First Component</h1>
       {/* the onClick is JSX event property that corresponds to onClick event of HTML  */}
       <input type="button" value="Hello" onClick={helloClick}/>
    </div>
  );
}
// export the component
export default App;
 ```
    - Create a Component with Data aka 'Stateful' Component
        - Use 'props' to received data from parent-component
            - The 'props' is an immutable object
``` javascript
import logo from './logo.svg';
import './App.css';

function App(props) {

  // method of the component that will be bound with HTML element
  const helloClick =()=>{
    alert('I am Clicked');
  };
  return (
    <div className="App">
       <h1>The First Component</h1>
       {/* the onClick is JSX event property that corresponds to onClick event of HTML  */}
       <input type="button" value="Hello" onClick={helloClick}/>
       <br/>
       <div>
         <strong>
            Value received from Parent is {props.msg} 
         </strong>   
       </div> 
    </div>
  );
}
// export the component
export default App;


// index.js
ReactDOM.render(
  <React.StrictMode>
    {/* The React JSX parser allows us to define the compile-time custom attributes
     to pass data and events across components 
     Here the 'msg' is a custom JSX attribute 
     The 'msg' attribute will be used as {props.msg} in App Component */}
    <App  msg={message}/>
  </React.StrictMode>,
  document.getElementById('root')
);
```
        - Use the 'useState()' hook to define a State Property with initial value and method to update an initial value
            - The React Hooks is a function with predefined behavior
            - Introduced in 16.8+
            - Mandatory in Functional Components
            - They are used only at 'FUNCTIONAL-COMPONENT-LEVEL' and not inside any other function of the component
        - Standard Hooks
            - useState(), useContext(), useEffect()
            - useReducer(), useMemo()    
        - The 'useState()', hook for defining 'STATE-PROPERTIES' for the functional component
            - this is imported from the 'react' package
            - syntax
                - const [STATE-PROPERTY-NAME, ACTION-THAT-WILL-UPDATE-STATE-PROPERTY-VALUE] = useState(INITIAL-VALUE);
                    - STATE-PROPERTY-NAME: The state property, that will be bound to HTML UI of the Component
                    - INITIAL-VALUE: The initial value of state property that will be used by the component
                    - ACTION-THAT-WILL-UPDATE-STATE-PROPERTY-VALUE: The action-method (function) that will be called on event of the HTML UI element which is responsible to update the initial value of state property to new value 
``` javascript
import {useState} from 'react';

import './App.css';

function App(props) {

  // define a state property

  const [name, updateName] = useState('Mahesh');

  // method of the component that will be bound with HTML element
  const helloClick =()=>{
    alert('I am Clicked');
  };
  return (
    <div className="App">
       <h1>The First Component</h1>
       {/* the onClick is JSX event property that corresponds to onClick event of HTML  */}
       <input type="button" value="Hello" onClick={helloClick}/>
       <br/>
       <div>
         <strong>
            Value received from Parent is {props.msg} 
         </strong>   
       </div> 
       <div>
          {/* bind the 'value' property of the input:text to 'name' state property
          value={name} --> One-Way Data Flow (From Component-to-UI)
            using 'onChange', received the end-user entered value in input element and
            update this new value in the 'name' state property
              onChange={(evt)=> updateName(evt.target.value)} --> One-Way Data Flow (UI-to-Component)
            */}
           <input type="text" value={name}
             onChange={(evt)=> updateName(evt.target.value)}/>
           <br/>
           <strong>
             Name = {name}
           </strong>

       </div>
    </div>
  );
}
// export the component
export default App;

```



 
