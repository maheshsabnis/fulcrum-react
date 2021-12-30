import {ProductHttpService} from './../../services/producthttpservice';

// define action methods types

export const GET_PRODUCTS = 'GET_PRODUCTS'; // input action
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'; // output actions
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED'; // output actions

export const POST_PRODUCT = 'POST_PRODUCTS'; // input action
export const POST_PRODUCT_SUCCESS = 'POST_PRODUCT_SUCCESS'; // output actions
export const POST_PRODUCT_FAILED = 'POST_PRODUCT_FAILED'; // output actions

// lets define an input action creator and output action creator

// input-action-creator
// this will be the action that will be dispatched
export const getProductsInput=()=>{
    return {
        type: GET_PRODUCTS
    }
};

// output-action, SUCCESS
export const getProductSuccess=(products)=>{
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: products // success will return products data
    };
};
// output-action, FAILED
export const getProductsFailed=(message)=>{
    return {
        type: GET_PRODUCTS_FAILED,
        payload: message // error message
    };
}

// lets write a middleware function that will perform Asynchronous calls and dispatch the input and output actions
// this middleware function will contain an async operation and return it based on the stage of execution (SUCCESS / FAIL) 
export const fetchProductsAsync=()=>{
    console.log('Inside the function');
    // the dispatch object represents a state of execution of Async operation
    return  async dispatch=>{
         // initiate the request
         dispatch(getProductsInput());
         const serv = new ProductHttpService();
         try {
            // the successful execution
            const response = await serv.getProduct();
            const data = response.data;
            // dispatch the success
            dispatch(getProductSuccess(data));
         }catch(e){
            // dispatch the fail when an error occur
            dispatch(getProductsFailed(e.message));    
         }  
    };
};



export const postProductsInput=(product)=>{
    return {
        type: POST_PRODUCT
    }
};

// output-action, SUCCESS
export const postProductSuccess=(product)=>{
    return {
        type: POST_PRODUCT_SUCCESS,
        payload: product // success will return products data
    };
};
// output-action, FAILED
export const postProductFailed=(message)=>{
    return {
        type: POST_PRODUCT_FAILED,
        payload: message // error message
    };
}


export const postProductsAsync=(product)=>{
    console.log('Inside the post function');
    // the dispatch object represents a state of execution of Async operation
    return  async dispatch=>{
         // initiate the request
         dispatch(postProductsInput(product));
         const serv = new ProductHttpService();
         try {
            // the successful execution
            const response = await serv.postProduct(product);
            const data = response.data;
            // dispatch the success
            dispatch(postProductSuccess(data));
         }catch(e){
            // dispatch the fail when an error occur
            dispatch(postProductFailed(e.message));    
         }  
    };
};


