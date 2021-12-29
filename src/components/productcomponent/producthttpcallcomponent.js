// import the useState
import { useState, useEffect } from "react";
import SelectComponent from "../reusablecomponents/selectcomponent";

// import the DataContext
import { DataContext } from "../../datacontext";
// importing DataGridComponent
import DataGridContextEventComponent from "../reusablecomponents/datagridcontextevent";
// import the service class
import {ProductHttpService} from './../../services/producthttpservice';


const ProductHttpCallComponent = () => {
  // define state properties
  const [product, setProduct] = useState({
    ProductRowId:0,
    ProductId: "",
    ProductName: "",
    CategoryName: "",
    Manufacturer: "",
    Description: "",
    BasePrice: 0,
  });
  const [products, setProducts] = useState([]);

  const [message, setMessage] = useState('');

  // define a state for the deleteButton in DataGridComponent from parent-to-child
  const [canDelete, toggleDelete]= useState(true);

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

  // define an instance of the ProductHttpService
  const serv = new ProductHttpService();

  // use the 'useEffect() Hook'
  
  useEffect(()=>{
    serv.getProduct().then((response)=>{
      setProducts(response.data); // get products data from REST api and store in in 'products' state array 
      setMessage('Data is fetched successfully');
    }).catch((error)=>{
      setMessage(`Error in fetching data ${error.message}`);
    });
  },[]); //--> dependency parameter


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
      serv.postProduct(product).then((response)=>{
         setProduct(response.data);
         setMessage('Data is Saved successfully');
      }).catch((error)=>{
        setMessage(`Error in saving data ${error.message}`);
      });
  };  

  const deleteRercord=(prd)=>{
    console.log(`Record to be deleted ${JSON.stringify(prd)}`);
    serv.deleteProduct(prd.ProductRowId).then((response)=>{
      setMessage('Record Delete Successfully');
    }).catch((error)=>{
      setMessage(`Error in saving data ${error.message}`);
    });
  }
  return (
    <div className="container">
      <h1>The Product Information System with Dynamic Table and Re-Usable Components</h1>
      <div className="form-group">
        <label>Product Row Id</label>
        <input type="text" className="form-control" value={product.ProductRowId} 
        readOnly/>
      </div>
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
      <div className="container">{message}</div>
      <DataContext.Provider value={{products, setProduct, canDelete, deleteRercord}}>
          <DataGridContextEventComponent/>
      </DataContext.Provider>

    </div>
  );
};

export default ProductHttpCallComponent;
