// import the useState
import { useState } from "react";

const ProductComponent = () => {
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
      <h1>The Product Information System</h1>
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
        <select className="form-control" value={product.CategoryName}
        onChange={(evt)=> setProduct({...product, CategoryName: evt.target.value})}>
          {Categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Manufacturer Name</label>
        <select className="form-control" value={product.Manufacturer}
         onChange={(evt)=> setProduct({...product, Manufacturer: evt.target.value})}>
          {Manufacturers.map((man, idx) => (
            <option key={idx} value={man}>
              {man}
            </option>
          ))}
        </select>
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
                  <th>Product Id</th>
                  <th>Product Name</th>
                  <th>Category Name</th>
                  <th>Manufacturer</th>
                  <th>Base Price</th>
              </tr>
          </thead>
          <tbody>
              {
                  products.map((prd,index)=>(
                      <tr key={index}>
                          <td>{prd.ProductId}</td>
                          <td>{prd.ProductName}</td>
                          <td>{prd.CategoryName}</td>
                          <td>{prd.Manufacturer}</td>
                          <td>{prd.BasePrice}</td>
                      </tr>
                  ))
              }
          </tbody>
      </table>
    </div>
  );
};

export default ProductComponent;
