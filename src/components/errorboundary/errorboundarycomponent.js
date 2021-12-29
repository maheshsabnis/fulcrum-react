import {Fragment, useState, Component} from 'react';

class ErrorBoundaryComponent extends Component {
      // lets write a constructor and define a state property in it to show error message
      constructor(props) {
          super(props);
          // declare the state
          this.state = {
              errorMessage: ''
          };
      }

      // use the getDerivedStateFromError() static property of the Component base class
      // to update the 'state' with the error message

      static getDerivedStateFromError(error){
          // update the state with the error message
          // this will internally call the 'setState()' method of the Component class to update the state
          return {
              errorMessage: error.toString()
          };
      }



      // implement the 'componentDidCatch()' method that will catch Exception thrown by any children component
      // Parameters
      // error: The Parameter that represents the error that is thrown
      // logInfo: Used tgo log error message in 'StackTrace'
      componentDidCatch=(error, logInfo)=>{
        console.log('====================================');
        console.log(`Error Occurred ${error.toString()} and log is ${logInfo.componentStack}`);
        console.log('====================================');
      } 

      // create a fallback UI
      // The 'render()' is a method of the base class that renders the HTML UI
      render(){
        if(this.state.errorMessage) {
            // if error is listened then return the fallback UI
            return (
                <Fragment>
                    <h2>The Error Occurred in the Child Component</h2>
                    <strong>
                        {
                            this.state.errorMessage
                        }
                    </strong>
                </Fragment>
            );
        } else {
             // Continue rendering Children Components
             return this.props.children;   
        }
      }
}



const SimpleErrorCheckComponent=()=>{
    let [counter,setCounter] = useState(0);

    const increment=()=>{
        setCounter(counter++);
    };

    // create a function that will return a success UI in try block
    const successRender=()=>{
        return (
            <Fragment>
                <strong>
                    The Current Counter Value is  = {counter}
                </strong>
                <br/>
                <button onClick={increment} className='btn btn-primary'>Increment</button>
            </Fragment>
        );
    };
       
        if(counter > 10) {
            throw new Error('Sorry! You have reached to Max Click');
        } else {
            return successRender();
        }
};



const ContainerWithErrorBoundaryComponent=()=>{
    const clickMe=()=>{
        alert('Hay!!!! I am Not Crashing');
        // reload the page (not recommended)
        window.history.go(0);
    };
    return (
        <Fragment>
            <h1>The Using Error Boundary  Component</h1>
            <ErrorBoundaryComponent>
                <SimpleErrorCheckComponent></SimpleErrorCheckComponent>
            </ErrorBoundaryComponent>
            <hr/>
            <input type="button" value="Button from Container"
             onClick={clickMe} className='btn btn-success'/>
        </Fragment>
    );
};

export default ContainerWithErrorBoundaryComponent;