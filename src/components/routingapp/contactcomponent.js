// import useParams  so that the Route Parameter from the URL can be read

import {useParams} from 'react-router-dom';
import {Employees} from './../../models/employess';
import {useEffect, useState} from 'react';

const ContactComponent=()=>{


    const [emp,setEmp]  = useState({EmpNo:0,EmpName:'',Salary:0});

    // create parameters object from the useParams() hook so that
    // the Route Parameter from the URL can be read

    let params = useParams();
    // read the parameter value
    // NOTE: Make sure that, you use exactly same parameter-name that is mentioned in the
    // Route path in Route Table
    // The value received from the URL parameter is always 'string'
    let eno = params.empno;

    let employees = Employees;

    // query to the employees collection to read the details of the Employee
    // based on the eno received from the Route Parameter

    useEffect(()=>{
        console.log(eno);
        let e = employees.filter((r,i)=> {
            return r.EmpNo === parseInt(eno);
        });
        console.log(JSON.stringify(e[0]));
        // update the state
        setEmp(e[0]);
    },[]);

    return (
        <div className="container">
            <h2>The Contact Component</h2>
            <div className='container'>
                <strong>
                    The Searched Employee is 
                    <br/>
                    {JSON.stringify(emp)}
                </strong>
            </div>
        </div>
    );
};

export default ContactComponent;