// import the useState
import { useState } from "react";
import SelectComponent from "../reusablecomponents/selectcomponent";

const ProductDynamicComponent = () => {
  // define state properties
  const [product, setProduct] = useState({
    ProductId: "",
    ProductName: "",
    CategoryName: "",
    Manufacturer: "",
    Description: "",
    BasePrice: 0,
  });
  const [products, setProducts] = useState([]);

  // local variables to component
  const Categories = ["Electronics", "Electrical", "Home Appliances"];

  const Manufacturers = [
    "MS-Electronics",
    "MS-Electrical",
    "MS-Home Appliances",
    "LS-Electronics",
    "LS-Electrical",
    "LS-Home Appliances",
  ];


  // read all properties of the 'product' object
  const columns = Object.keys(product);

 // clear the product object
  const clear=()=>{
    setProduct({
        ProductId: "",
        ProductName: "",
        CategoryName: "",
        Manufacturer: "",
        Description: "",
        BasePrice: 0,
      });
  };

  // add a new product
  const save=()=>{
      // modify the products array by adding new  Product in it
      setProducts([...products, product]);

  };  

  // this method will be invoked on 'onCLick' event of the table row
  const getSelectedProduct=(prd)=>{
    setProduct(prd);
  }

  return (
    <div className="container">
      <h1>The Product Information System with Dynamic Table and Re-Usable Components</h1>
      <div className="form-group">
        <label>Product Id</label>
        <input type="text" className="form-control" value={product.ProductId} 
         onChange={(evt)=> setProduct({...product, ProductId: evt.target.value})}/>
      </div>
      <div className="form-group">
        <label>Product Name</label>
        <input
          type="text"
          className="form-control"
          value={product.ProductName}
          onChange={(evt)=> setProduct({...product, ProductName: evt.target.value})}
        />
      </div>
      <div className="form-group">
        <label>Category Name</label>
        <SelectComponent dataSource={Categories}
         stateProperty={product.CategoryName}
         selectedValue={(value)=>setProduct({...product, CategoryName:value})}></SelectComponent>
        {/* <select className="form-control" value={product.CategoryName}
        onChange={(evt)=> setProduct({...product, CategoryName: evt.target.value})}>
          {Categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select> */}
      </div>
      <div className="form-group">
        <label>Manufacturer Name</label>
        <SelectComponent dataSource={Manufacturers}
         stateProperty={product.Manufacturer}
         selectedValue={(value)=>setProduct({...product, Manufacturer:value})}></SelectComponent>
        {/* <select className="form-control" value={product.Manufacturer}
         onChange={(evt)=> setProduct({...product, Manufacturer: evt.target.value})}>
          {Manufacturers.map((man, idx) => (
            <option key={idx} value={man}>
              {man}
            </option>
          ))}
        </select> */}
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          className="form-control"
          value={product.Description}
          onChange={(evt)=> setProduct({...product, Description:evt.target.value})}
        />
      </div>
      <div className="form-group">
        <label>Base Price</label>
        <input
          type="number"
          className="form-control"
          value={product.BasePrice}
          onChange={(evt)=> setProduct({...product, BasePrice: parseInt(evt.target.value)})}
        />
      </div>
      <div className="btn-group">
        <input type="button" className="btn btn-primary" value="Clear" 
         onClick={clear}/>
        <input type="button" className="btn btn-success" value="Save" 
        onClick={save}/>
      </div>
      <br/>
      <table className="table table-bordered table-striped">
          <thead>
              <tr>
                   {
                     columns.map((col,iCol)=>(
                       <th key={iCol}>{col}</th>
                     ))
                   }
              </tr>
          </thead>
          <tbody>
              {
                  products.map((prd,index)=>(
                      <tr key={index} onClick={()=>getSelectedProduct(prd)}>
                          {
                             columns.map((col,iCol)=>(
                              <td key={iCol}>{prd[col]}</td>
                            ))
                          }
                      </tr>
                  ))
              }
          </tbody>
      </table>
    </div>
  );
};

export default ProductDynamicComponent;
