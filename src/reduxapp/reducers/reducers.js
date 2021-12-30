// Reducer: it an PURE Function that accepts initialState and action objects as in put parameter and based on the action type the state is updated
// NOTE: There can be multiple reducers functions can be defined, one reducer function can call other reducer function


// The 'combineReducers' is a method that accepts multiple reducer function and store it in a single reducer object
// so that its is easy for the react-redux application to monitor 'store' and perform read/write operations on it


import {combineReducers} from 'redux';


// the below reducer functions are executed when the 'ADD_EMPLOYEE' action is dispatched

export const addEmployeeReducer=(state, action)=>{
    console.log(`Monitoring the addEmployeeReducer with initial State is = ${JSON.stringify(state)} `);
    switch(action.type){
        case 'ADD_EMPLOYEE':
            return {
                employee:action.payload // receive the 'payload' from ADD_EMPLOYEE action
                                        // please refer action.js from 'actions' folder
            };
        default:
            return state; // return the default state        
    }
};

// the following reducer has an input parameter as default empty state array
export const listEmployeeReducer=(state=[], action)=>{
    console.log(`Monitoring the listEmployeeReducer with initial State is = ${JSON.stringify(state)} `);
    switch(action.type){
        case 'ADD_EMPLOYEE':
              // the current reducer function is simply accessing the addEmployeeReducer function
              // and receiving the newly added employee from it and mutating this employee
              // in the state
               return [...state, addEmployeeReducer(undefined, action)]; 
        default:
           return state;     
    }
};

// create a single reducer object using combineReducers
// since listEmployeeReducer function is calling the addEmployeeReducer function
// it is not required to mentioned in separately into the  combineReducers
// but if reducers function are independent then call them separately

// e.g. const reducers = combineReducers({reducerFn1, reducerFn2,....});

const reducers = combineReducers({listEmployeeReducer});

export default reducers;