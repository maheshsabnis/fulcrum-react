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
