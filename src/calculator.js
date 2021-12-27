import { useState } from "react";

const SimpleCalculator = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);

  const add = () => {
      setZ(x+y);
  };

  return (
    <div>
      <h2>A Simple Calculator</h2>
      <div>
        X:
        <input
          type="text"
          value={x}
          onChange={(evt) => setX(parseInt(evt.target.value))}
        />
      </div>
      <br />
      <div>
        Y: <input type="text" 
         value={y}
         onChange={(evt) => setY(parseInt(evt.target.value))}
        />
      </div>
      <br />
      <div>
        Z: <input type="text" 
        value={z} readOnly
        />
      </div>
      <br />
      <div>
        <input type="button" value="Add" onClick={add}/>
      </div>
    </div>
  );
};

export default SimpleCalculator;
