import { Employees } from "../../models/employess";
import {Link} from 'react-router-dom';
const HomeComponent = () => {
  let employees = Employees;
  return (
    <div className="container">
      <h2>The Home Component</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>EmpNo</th>
            <th>EmpName</th>
            <th>Salary</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, idx) => (
            <tr key={idx}>
              <td>{emp.EmpNo}</td>
              <td>{emp.EmpName}</td>
              <td>{emp.Salary}</td>
              <td>
                  <button className="btn btn-warning">
                      {/* Navigation based on the parameter value aka
                        Parameterized Routing
                      */}
                      <Link  to={`/contact/${emp.EmpNo}`}>Show Details</Link>
                  </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeComponent;
