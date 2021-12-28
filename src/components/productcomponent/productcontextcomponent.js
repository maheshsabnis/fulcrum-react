// import the useState
import { useState } from "react";
import SelectComponent from "../reusablecomponents/selectcomponent";

// import the DataContext
import { DataContext } from "../../datacontext";
// importing DataGridComponent
import DataGridContextEventComponent from "../reusablecomponents/datagridcontextevent";

const ProductContextComponent = () => {
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
        
      </div>
      <div className="form-group">
        <label>Manufacturer Name</label>
        <SelectComponent dataSource={Manufacturers}
         stateProperty={product.Manufacturer}
         selectedValue={(value)=>setProduct({...product, Manufacturer:value})}></SelectComponent>
         
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
      {/* Use the DataContext.Provider to provide the products array and the setProduct action that will receiv the selected product from the Table Row when the row is clicked in the DataGridContextEventComponent  */}
      <h5>Using Context</h5>
      <DataContext.Provider value={{products, setProduct}}>
          <DataGridContextEventComponent/>
      </DataContext.Provider>

    </div>
  );
};

export default ProductContextComponent;
