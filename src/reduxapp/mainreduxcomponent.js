import AddEmployeeComponent from "./components/addemployeecomponent";
import ListEmployeeComponent from "./components/listemployeescomponent";

// The current component MUST subscribe to store so that 
// after dispatching action the updated data can be read from the store

import {useDispatch, useSelector} from 'react-redux';

// import the action
import addEmployee from './actions/actions';

const MainReduxComponent=()=>{
    // use the useDisptch() to define a 'dispatch' object to dispatch action
    let dispatch = useDispatch(); 
    // use the useSelector() to subscribe to the store to read the state (aka data) so that
    // it can be shown on component
    // Note: we are using the listEmployeeReducer because it is teh one that is updating the store
    // state=>state.listEmployeeReducer, here the 'state' is initial data that will be updated
    // by the execution  of the  state.listEmployeeReducer reducer

    let stateEmployees  = useSelector(state=>state.listEmployeeReducer);
  
    return(
        <div className="container">
            {/* Lets dispatch an addEmployee() action  
              addEmployeeRecord() method will receive 'employee' object from the child component
              i.e. AddEmployeeComponent and the current component will use
              dispatch() object to dispatch addEmployee(employee) action an pass the 'employee'
              object to it that is received from the AddEmployeeComponent
            */}
            <AddEmployeeComponent
             addEmployeeRecord={(employee)=>dispatch(addEmployee(employee))}></AddEmployeeComponent>
            <hr/>
             {/* Passing teh received data from the store to the Component */}
            <ListEmployeeComponent employees={stateEmployees}></ListEmployeeComponent>
        </div>    
    );
};

export default MainReduxComponent;