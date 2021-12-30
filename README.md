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

    - Component's State Properties can be used for data binding and updating the compojent with the state changes based on UI events. Where as, the local variable to component can be changed based on events like the state properties

    - Install Bootstrap for Styling and axios for HTTP Calls
        - npm install --save bootstrap axios
    - If the Component's UI Element is bound to Complex Object's property, then to update the Object's property, use the 'spread operator' to update the object
        - '...'     

# Rules for Creating Re-Usable Components
1. Make sure that, re-usable Component accept data to generate its UI
    - To prevent the re-usable component from crash, please validate the received data for 'undefined' or 'length' or '0' value or 'NaN' value or 'Empty' value 
2. Make sure that, if the re-usable Component wants to emit data to its parent, then the re-usable component must have an event registered in it.
    - If the emitted data from re-usable component is updating the value of the 'State' property of the parent component, then the re-usable component must be aware (or passed) about the 'State' property of the parent-component
    - The re-usable component MUST use the 'props' property method to emit data to parent  component. The Parent Component will subscribe to this props.method and receive the data emitted from child.  


# using the 'useContext()' Hook
    - This is an approach of sharing data from parent component to a specific child component    
    - The child component reads data provided from the parent component an use it for processing 
    - React.Context
        - Object provided to define a context-object using 'createContext()' method
        - const DataContext = createContext(INITIAL-VALUE)
            - INITIAL-VALUE can be any of the following
                - null, object, array, date, number, string, etc.
                - Generally, the 'null' value is used so that then while actually sending data we can use specific-type value
        - Context Property Objects
            - Provider Object
                - Used by Parent-Component to provide data to specific child component, using the 'value' property
                    - <DataContext.Provider value={}>
                            <ChildComponent/>
                      </DataContext.Provider>       
                    - The 'value' will be available  to <ChildComponent> only    
                        - The 'value' can be a single object, array, or complex object that contains properties and callback methods in it      
            - The 'Consumer' object or the 'useContext()' hook
                - The Child Component will use the 'useContext()' hook to consume the data from the parent component (aka known as Subscription)
                    - in Child Component code will be 
                        - const receivedData = useContext(DataContext);
                            - The data Provided from the parent component will be stored in 'receivedData' property of the child component              

# Using Axios object for Async HTTP Calls
- axios object methods
    - get(),post(), put(),delete()
    - All these methods return
        - AxiosResponse object the Promise Type Object
    - Promise.then(SUCCESS-CALLBACK).catch(ERROR-CALLBACK);    
- The react uses 'useEffect()' hook to execute Long-Running Operation e.g. AJAX Call w/o blocking the Component Rendering.        
    - The 'useEffect()' will be always called at functional component level and will start executing immediately when the component is loaded 
    - This will be most suitable for following operations 
        - Use to make an AJAX calls
        - Subscribe and de-subscribe the Custom Events in Component  
    - Syntax:
        - useEffect(()=>{
            // initialization Operations, e.g. AJAX call to made when the Component is loaded  
            // subscribe custom events on the component     
            return ()=>{
                // (OPTIONAL) the closing operations e.g.  when the call is completed, release the Promise Object 
                // release custom events when the component is unloaded 
            }
        }, [DEPENDENCY-ARRAY-PARAMETER] );
        - DEPENDENCY-ARRAY-PARAMETER
            - Since the 'useEffect()' hook is executed at functional component level, it will be in executing state till the component is loaded and in executing state. If the logic of the useEffect() have already modified the HTML rendering the component, then pass a dependency parameter to the useEffect() and inform it that, the UI is updated, the component has rendered with update values received from useEffect(), so useEffect() can stop

# Single Page Application in React.js 
1. React.js 'DOES-NOT-HAVE' support for routing out-of-the-box 
2. To implement the SPA in React, we need 'react-router-dom' library
    - This is build on the top of the React.js by Third-Party Community
    - React Router is a lightweight, fully-featured routing library for the React JavaScript library.
3. React-Router-DOM Object Models  
    - BrowserRouter
        - Used to manage the Browser URLs for Clean routing based on the URL match in the Router Table
        - If the Match is not found then either Not-Found is shown or by default navigate to home page (Developer MUST Configure this)
    - Routes
        - The Route Table that contains 'Route' Object, it is an expression for Routing
        - Route: The Expression for routing with following properties
            - path: The URL
            - element: The Component to navigate to based on URL
            - index: The default Navigation (the default component to be loaded)
        - Outlet:
            - The Object that render the Children (components based on URL navigation)
        - Link:
            - The object that is used to query to route table 
            - Route Links            
            - The 'to' property which accepts URL for querying route table 
    - Router Hooks
        - useNavigate()
            - Used for 'Event-Based' navigation e.g. On Button Click Navigate to the Route
            - Navigate to Route on HTML element's events instead of using 'Link'     
        - useParams()
            - Used to read The URL parameter to perform Parameterized routing         
4. Implementation
    - Install it as follows
        - npm install --save react-router-dom      
    - Create Components for routing by adding routingapp folder in src/components folder 
        - HomeComponent
        - AboutComponent
        - ContactComponent
        - LayoutComponent
            - This will act as a Container Component for Home, About, Contact Components
            - This component will have the the Navigation Links for the routing
        - NotFoundComponent    
    - Define a Route Table in the 'App' Component in App.js    
    - Modify the index.js that will import BrowserRouter and App component will loaded and executed under the BrowserRouter

# Recommended Coding Standards while working with React Application
1. (Mandatory) If the Component has any condition that throws exceptions then make sure that the FallBack UI is rendered instead of crashing the Component and hence the complete UI
    - This is known as Error Boundary
    - There are tow ways provided as follows to Handle Errors
        1. Create a FallbackUI in 'each child component' that may raise exception which results into an error and crash component and hence the whole DOM tree, and then use 'try...catch' block to execute the logic and when an exception occurs return the FallbackUI in catch block

        2. The ErrorBoundary Component in React 16.0+ 
            - This is a Class Component that contains componentDidCatch() 
            - This class component will be responsible for listening to error exception message from its children components and render the FallBackUI

2. Make sure that the Front-End Business Code is divided into separate code files and load these files in the component as when required
    - This is Called as 'Code-Splitting' (Mandatory)
    - This is applied to reusable-components also
    - Observation of Code-Splitting
        - If the re-usable components takes time to load, then implement the 'Lazy-Loading'
            - Use the 'Suspense' component to show FallbackUI till the lazy-loaded components is not loaded 
            - Suspenses is the Standard 'react' component     
        
        - For Lazy Loading use the 
            - React.lazy(()=> import (Relative Path of the Component)) method    

            - const MyComponent = React.lazy(()=>import('./MyComponent')); 
                - The './MyComponent' may be present in the mycomponent.js
                - The React.lazy(), look for the component and load the component asynchronously 
                    - First, Find File
                    - Second, check if the file contains Exportable React Component
                    - Third, The Component will be loaded
                        - Component's Instance will be created
                            - All dependencies of the component will be resolved and added into the instance
                        - There may be a considerable delay in instance creation, in such case create 'Fallback-place-holder' known as 'Suspense'
                    - The 'Suspense' will show the fallback UI till the actual component is not loaded          
3. Use the React Standard 'Fragment' component for default layout (Good For UI Layouting)

4. If state property is to be modified or updated based on data received from external service (e.g. REST API), then instead of using the useState() to directly update the state property, use 'useReducer()' hook
    - The useReducer() will update state in Multiple-Stages as follows
        - Initiating
        - Progress
        - Updated With Final Value when the External call is successfully completed
        - Failed because the External Call is failed    
            - state = { status: '', data:'', error:'' };
                - status: Call Initialized | Call In Progress | Call is Completed | Call Failed
                - data: [] | [DATA-RECEIVED-FROM-EXTERNAL-CALL]
                - error: undefined Or Empty | Error in Call

    - The useReducer() is an approach to update the state based on Condition from Initial-to-Final
        - useReducer(Reducer, InitialState)
            - Reducer()
                - Pure JavaScript Function(?)
                    - It is function has has input and output parameter as Same Object             
                - function reducer(state, action){....}
                    - The 'state' is the new data (oe value) to be updated in 'STATE-PROPERTY-OF-THE-COMPONENT'
                    - The 'action', a CONDITION of the execution based on which the state is updated to new value
                        - e.g. action can be : DATA_FETCH_STARTED, DATA_FETCH_SUCCESSFUL, DATA_FETCH_FAILED
                    - The reducer() function returns the modified 'state'    
            - InitialState
                - This is an actual object that is to be updated   
        - STEPS for Using useReducer()
            - Define a State
                - Complex Object
            - Define a Reducer Function
                - Explained Above
            - Define a Custom Hook that will use the useReducer() to update the state
                - The function that will be used by component to update the state
            - Create a Component that will use the Custom Hook for state updates   
                - This will use the Custom Hook            

# Using Redux

1. Install Libraries for Redux with React
    - npm install redux react-redux
2. Various Object provided by these libraries    
    - redux
        - The 'store' object created using 'createStore()' method
            - This is a Global Application State
        - The 'combineReducers()' method
            - Used to combine all reducer functions those are responsible to update the state in store using Read/Write operations
        - The 'applyMiddleware()' method
            - The method that is used when an action is performing asynchronous execution e.g. Promise Based Execution
        - The 'compose()' method
            - Configure the store to use the Middleware using apply Middleware     
        - Define a Global Store as Follows
            - let store = createStore(reducer, applyMiddleware, compose ); 
    - react-redux (4.0+ with React 16.8+)
        - The 'Provider' Object
            - A Container Component that provides 'store' property which accepts the 'redux store'
            - The Provider configures the redux-store for all react components executing inside it
            - <Provider store={reduxStore}>
                  <MyReactComponent/>
              </Provider>         
            - The 'reduxStore' is configured to MyReactComponent and all of its children components         
        - The 'useDispatch()', a hook that is used to dispatch an Action from the Component
            - Link the useDispatch() with 'an event' of UI element of the component
        - The 'useSelector()', a hook that is used to subscribe the store to component and read data from the component   
        - useDispatch() and useSelector() hooks are responsible to connect the React Component with Redux Object Model     

        - Some Older react-redux object for connecting React Component with Redux
            - The 'connect()' method
        - connect(mapDispatchToProps, mapStoreToProps)(MyReactComponent) 
            - mapDispatchToProps (replaced by useDispatch())
                - Listen to an event raised on the component and Link this to dispatch action with data from the component       
            - mapStoreToProps (replaced by useSelector())
                - Subscribe the Component with the Store so that the data from the store can be Read/Written by the component     
