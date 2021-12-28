// import useContext
import { useContext } from "react";
// import the DataContext
import { DataContext } from "../../datacontext";
const DataGridContextEventComponent = () => {
  // 1. subscribe to the DataContext so that data from the DataContext can be read
  // this will read the 'value' property of the provider to read the data

  let subscribe = useContext(DataContext);

  console.log(`Data from DataContext after subscribe ${JSON.stringify(Object.keys(subscribe))}`);


  let dataSource = subscribe[Object.keys(subscribe)[0]]; // the 'array' received from the  parent Component
  let event = subscribe[Object.keys(subscribe)[1]]; // the function received from parent to child

  // 2. use the dataSource to generate the table
  if (dataSource === undefined || dataSource.length === 0) {
    return <div className="container">No Records to show</div>;
  } else {
      // 2.a. Read 0th record from the dataSource to read its keys 
    const columns = Object.keys(dataSource[0]);
    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            {columns.map((col, iCol) => (
              <th key={iCol}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((record, index) => (
            <tr key={index} onClick={()=>event(record)}>
              {columns.map((col, iCol) => (
                <td key={iCol}>{record[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

export default DataGridContextEventComponent;
