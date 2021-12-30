// define an action creator that will accept data when it is dispatched from Component
// and return output Action Type and Payload

const addEmployee=(employee)=>{
    console.log(`Detected the addEmployee action with data as ${JSON.stringify(employee)}`);
    // lets write Some Logic here
    employee.EmpName = employee.EmpName.toUpperCase();
    console.log(`addEmployee action has done its execution and returning the Output-Action with payload as ${JSON.stringify(employee)}`);
    
    // return an output action
    return {
        type: 'ADD_EMPLOYEE',
        payload:employee
    };
};


export default addEmployee;