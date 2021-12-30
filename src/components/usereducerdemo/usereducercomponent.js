import {useState, useReducer,useEffect ,Fragment} from 'react';
import axios from 'axios';

// define an initial State
const initialState  = {
    loadingData: '', // property that will be used to represents that the call is in progress
    error:'', // property used to notify that the call failed so state will not ne updated to data
    data:[] // if the call is successful then data will be received and updated in the state 
};


// define a reducer function
// this function will update the state based on 'action' type occurred while executing the call to External APIs
// the 'state' is initialState
const reducer=(state, action)=>{
     // write the code to update the state
     // action.type: action is the current stage of the execution and type is the name of the stage
     // e.g. STARTED, FAILED, COMPLETED, etc.
     //  action.payload: the 'payload' is generally used by JS applications to represent the data received from external REST API Calls 
     switch(action.type){
        case 'DATA_FETCH_STARTED':
                return {...state, loadingData: 'Call is started', error: ''};
        case 'DATA_FETCH_SUCCESS':
              console.log(`In Reducer data = ${JSON.stringify(action.payload)}`);
                return {...state, loadingData: 'Call is completed Successfully', error: '', data: action.payload};
        case 'DATA_FETCH_FAILED':
                return {...state, loadingData: 'Call is Failed', error: action.payload};                 
        default :
            return state;
     }   
};


// create a custom Hook that will make a call to REST API using axios and return data
const useReducerAsyncRest=(url)=>{
    // define an object of the type 'useReducer()' with destructuring as follows
    // Parameters
    // P1: The reducer() function that will update State
    // P2: The initialState that will be updated by the reducer() function
    const [data, action] =  useReducer(reducer, initialState);
    // the 'useReducer()' object has following 2 properties
    // The 'data' property, the data that will be used by the reducer() function to update the state
    // The 'action' property, the action that will be executed (or dispatched) by reducer to define a condition to update the state e.g. STARTED, SUCCESS,FAILED 

    // write an implementation for the custom hook that will make an AJAX call and receive the data
    
    useEffect(()=>{
        action({type: 'DATA_FETCH_STARTED'});
        axios(url).then((response)=>{
            if(response.status !== 200) {
                action({type: 'DATA_FETCH_FAILED'});
                throw new Error(`Error Occurred`);
            }
            return response; // Provide the received response for processing 
        }).then((result)=>{
            // Processing the Response and receiving data from it
            action({type: 'DATA_FETCH_SUCCESS', payload: result.data});
        }).catch((error)=>{
            action({type: ' ED', payload: error.message})
        });
    },[]);
    // return the final data
    console.log('====================================');
    console.log(`Return from reducer ${JSON.stringify(data)}`);
    console.log('====================================');
    return data;
};




// create a component
const UseReducerComponent=()=>{
    const url = 'https://apiapptrainingnewapp.azurewebsites.net/api/Products';
    // use the Custom Hook and pass the URL to it to get the final State of the data
    const state = useReducerAsyncRest(url);
    return(
        <Fragment>
            <h1>Using the 'useReducer()' Hook</h1>
            {
                JSON.stringify(state)
            }
        </Fragment>
    );
};

export default UseReducerComponent;