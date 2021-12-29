import {Fragment, useState} from 'react';

const SimpleErrorCheckComponent=()=>{
    let [counter,setCounter] = useState(0);

    const increment=()=>{
        setCounter(counter++);
    };

    // create a function that will return a success UI in try block
    const successRender=()=>{
        return (
            <Fragment>
                <strong>
                    The Current Counter Value is  = {counter}
                </strong>
                <br/>
                <button onClick={increment} className='btn btn-primary'>Increment</button>
            </Fragment>
        );
    };
    
    // create a function that will return a FallbackUI in catch block
    const fallbackUIRender=(e)=>{
        return (
            <Fragment>
                <h1>The Counter Component is Failed because of some internal inconsistencies</h1>
                <strong>
                    There is error inn execution
                    <br/>
                    {e.message}
                </strong>
            </Fragment>
        );
    };


    // use try..catch block for rendering

    try {
        if(counter > 10) {
            throw new Error('Sorry! You have reached to Max Click');
        } else {
            return successRender();
        }
    }catch(e){
        return fallbackUIRender(e);
    }


    // if(counter>10) {
    //     throw new Error('Sorry! You have reached to Max Click');
    // } else {
    //     return (
    //         <Fragment>
    //             <strong>
    //                 The Current Counter Value is  = {counter}
    //             </strong>
    //             <br/>
    //             <button onClick={increment} className='btn btn-primary'>Increment</button>
    //         </Fragment>
    //     );
    // }
};



const ContainerComponent=()=>{
    const clickMe=()=>{
        alert('Hay!!!! I am Not Crashing');
    };
    return (
        <Fragment>
            <h1>The Container Component</h1>
            <SimpleErrorCheckComponent></SimpleErrorCheckComponent>
            <hr/>
            <input type="button" value="Button from Container"
             onClick={clickMe} className='btn btn-success'/>
        </Fragment>
    );
};

export default ContainerComponent;