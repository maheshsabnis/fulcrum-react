import { useState } from "react";

import "./App.css";

function App(props) {
  // define a state property
         // state-property, the function that will be invoked (or executed) based on Event raised on UI           
  const [name, updateName] = useState("Mahesh");

  const [heros, getHeros] = useState([
    "James Bond",
    "Indiaia Jones",
    "Jason Bourn",
    "Jack Reacher",
    "Ethan Hunt",
  ]);

  const [actors, setActors] = useState([
    'Sean Connary', 'George Luznaby', 'Roger Mooere', 'Trimothy Dalton', 'Pierce Brosnon','Daniel Craig'
  ]);

  // method of the component that will be bound with HTML element
  const helloClick = () => {
    alert("I am Clicked");
  };
  return (
    <div className="App">
      <h1>The First Component</h1>
      {/* the onClick is JSX event property that corresponds to onClick event of HTML  */}
      <input type="button" value="Hello" onClick={helloClick} />
      <br />
      <div>
        <strong>Value received from Parent is {props.msg}</strong>
      </div>
      <div>
        {/* bind the 'value' property of the input:text to 'name' state property
          value={name} --> One-Way Data Flow (From Component-to-UI)
            using 'onChange', received the end-user entered value in input element and
            update this new value in the 'name' state property
              onChange={(evt)=> updateName(evt.target.value)} --> One-Way Data Flow (UI-to-Component)
            */}
        <input
          type="text"
          value={name}
          onChange={(evt) => updateName(evt.target.value)}
        />
        <br />
        <strong>Name = {name}</strong>
      </div>
      <br />
      {/* <div>
           Heros
           <select>
             {
               heros.map((h,i)=>(
                 <option key={i} value={h}>{h}</option>
               ))
             }
           </select>
        </div>     */}

        

      {/* Use the DropdownComponent and pass the 'heros' state to it */}
      <DropdownComponent dataSource={heros}></DropdownComponent>
      <hr />
      <DropdownComponent dataSource={actors}></DropdownComponent>
    </div>
  );
}

// other component
const DropdownComponent = (props) => {
  // Always add a conditional statement to a reusable component to check the
  // state of the props data this will prevent the crash of DOM Tree
  if (props.dataSource === undefined || props.dataSource.length === 0) {
    return <div>No data to show</div>;
  } else {
    return (
      <div>
        <select>
          {props.dataSource.map((h, i) => (
            <option key={i} value={h}>
              {h}
            </option>
          ))}
        </select>
      </div>
    );
  }
};

// export the component
export default App;
