import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchProductsAsync, postProductsAsync} from './../actions/actionsindex';

const ProductsComponent=()=>{
    let dispatch = useDispatch();
    // subscribe to the store
    let stateData = useSelector(state=>state.productsList);

    // dispatch an action in use effect
    useEffect(()=>{
        dispatch(fetchProductsAsync());
    },[dispatch]);


    const save=()=>{
        let product = {
            ProductId:'Prd-10001',
            ProductName: 'Keyboard',
            CategoryName: 'Electronics',
            Manufacturer: 'MS-Electronics',
            Description: 'Game Controller',
            BasePrice:23450
        };

        dispatch(postProductsAsync(product));
    };


    // define a function that will render some UI based on execution stage of the
    // the action

    const renderUI=()=>{
        if(stateData !== undefined) {
            // if(stateData.loading) return (<p>Loading Products......</p>);
            // if(stateData.hasError) return (<p>Some Error Occurred While Fetching Data {stateData.message} </p>);
            // if(stateData.products === undefined || stateData.products.length === 0) 
            //     return (<p>No Data to Show</p>)
            return(
                <div className='container'>
                    {JSON.stringify(stateData.products)}
                    <hr/>
                    {stateData.message}
                </div>
            ); 
                 
        } else {
            return (
                <div className='container'>
                    <strong>
                        Something is wrong
                    </strong>
                </div>
            );
        }
    };


    return (
        <div className="container">
            <h1>Using React-Redux-Thunk</h1>
            {renderUI()}
            <hr/>
            <input type="button" value="Post Data" className='btn btn-success'
             onClick={save}/>    
        </div>
    );
};

export default ProductsComponent;