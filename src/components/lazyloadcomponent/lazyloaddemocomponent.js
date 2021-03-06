import React, {Fragment, Suspense} from 'react';

// lazy load the component

const ProductHttpCallComponent = React.lazy(()=>
    import('./../productcomponent/producthttpcallcomponent')
);

const LazyloadDemoComponent=()=>{
  let data = [10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90,10,20,30,40,50,60,70,80,90];  
  return(
      <Fragment>
          <h2>Lazy Loading</h2>
          {/* The fallback will be used to render the Fallback UI till the actual component is  not loaded */}
          <Suspense fallback={
              <div className='container'>
                  <strong>
                      Waiting for the Component to load
                      {
                         data.map((d,i)=>(
                             <strong key={i}>{d}</strong>
                         ))   
                      }
                  </strong>
              </div>
          }>
              {/* If the Actula Component is loaded then render it */}
               <section>
                    <ProductHttpCallComponent></ProductHttpCallComponent>
               </section> 
          </Suspense>
      </Fragment>
  );
};


export default LazyloadDemoComponent;