// import useContext
import { useContext } from "react";
// import the DataContext
import { DataContext } from "./../../datacontext";
const DataGridComponent = () => {
  // 1. subscribe to the DataContext so that data from the DataContext can be read
  // this will read the 'value' property of the provider to read the data
  let dataSource = useContext(DataContext);

  // 2. use the dataSource to generate the table
  if (dataSource === undefined || dataSource.length === 0) {
    return <div class="container">No Records to show</div>;
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
          {dataSource.map((prd, index) => (
            <tr key={index}>
              {columns.map((col, iCol) => (
                <td key={iCol}>{prd[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

export default DataGridComponent;
