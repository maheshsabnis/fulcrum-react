import { useState, Fragment } from "react";
const AddEmployeeComponent = (props) => {
  const [employee, setEmployee] = useState({ EmpNo: 0, EmpName: "" });
  const clear=()=>{
     setEmployee({ EmpNo: 0, EmpName: "" });
  };
  const save=()=>{
    // logic to save Employee
    // props.addEmployeeRecord(), is the props received from the parent component
    // the current component will uses this method and pass 'employee' state
    // property to it
    props.addEmployeeRecord(employee);
  };
  return (
    <Fragment>
        <h2>Add New Employee</h2>
      <div className="form-control">
        <label>EmpNo</label>
        <input
          type="number"
          className="form-control"
          value={employee.EmpNo}
          onChange={(evt) =>
            setEmployee({ ...employee, EmpNo: parseInt(evt.target.value) })
          }
        />
      </div>
      <div className="form-control">
        <label>EmpName</label>
        <input
          type="text"
          className="form-control"
          value={employee.EmpName}
          onChange={(evt) =>
            setEmployee({ ...employee, EmpName:evt.target.value })
          }
        />
      </div>
      <div className="btn-group">
          <input type="button" value="Clear" className="btn btn-primary"
           onClick={clear}/>
          <input type="button" value="Save" className="btn btn-success"
          onClick={save}/>
      </div>
    </Fragment>
  );
};

export default AddEmployeeComponent;
