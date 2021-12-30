// import all action (Type Constants, Creations and Action methods)

import * as actions from "./../actions/actionsindex";

import {combineReducers} from 'redux';

// define an initial state object
export const initialState = {
  loading: false,
  hasErrors: false,
  message: "",
  products: [],
};

// define a reducer function for GET operations which will listen to (or monitor) all GET input and output Actions

export const readProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS:
      console.log("Reducer will listen the Get Products Action");
      return { ...state, loading: false };
    case actions.GET_PRODUCTS_SUCCESS:
      console.log(
        `The Reducer has listened to Get Products Success with data as ${action.payload}`
      );
      return {
        products: action.payload,
        message: "data receive success",
        loading: true,
        hasErrors: false,
      };
    case actions.GET_PRODUCTS_FAILED:
      console.log(
        `The Reducer has listened to Get Products Failed with error as ${action.payload}`
      );
      return {
        ...state,
        message: action.payload,
        loading: true,
        hasErrors: true,
      };
    default:
      return state;
  }
};

export const writeProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.POST_PRODUCT:
      console.log("Reducer has Listened to Post Product");
      return { ...state, loading: false, hasErrors: false };
    case actions.POST_PRODUCT_SUCCESS:
      console.log(
        `Reducer has Listened to Post Product Success with data as ${JSON.stringify(
          action.payload
        )}`
      );
      return {
        ...state,
        products: action.payload,
        loading: true,
        message: "Data is posted successfully",
        hasErrors: false,
      };
    case actions.POST_PRODUCT_FAILED:
      console.log("Reducer has Listened to Post Product Failed");
      return { ...state, message: action.payload,loading: true, hasErrors: true };
    default:
      return state;
  }
};

const oneReducer = combineReducers({
    productsList: readProductsReducer, // productsList: will be used by the component to read all products
    newProduct: writeProductReducer    // newProduct: Will be used by the component to show newly added component
});

export default oneReducer;