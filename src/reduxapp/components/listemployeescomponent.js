import {Fragment} from  'react';
import DataGridComponent from './../../components/reusablecomponents/datagridcontext';

const ListEmployeeComponent=(props)=>{

    let dataSource = [];

    // for(let record of props.Employees) {
    //     dataSource.push(record.employee);
    // }

    return(
        <Fragment>
            <h2>List of Employees</h2>
           {
               JSON.stringify(props.employees)
           }
        </Fragment>
    );    
};


export default ListEmployeeComponent;