import axios from "axios";

export class ProductHttpService {
    constructor(){
        this.url = 'https://apiapptrainingnewapp.azurewebsites.net/api/Products';
    }
    getProduct(){
        let response = axios.get(this.url);
        return response;
    }
    postProduct(prd){
        let response = axios.post(this.url, prd, {
            headers: {
                'Content-Type':'application/json'
            }
        });     
        return response;
    }
    putProduct(id,prd){
        let response = axios.put(`${this.url}/${id}`, prd, {
            headers: {
                'Content-Type':'application/json'
            }
        });     
        return response; 
    }
    deleteProduct(id){
        let response = axios.delete(`${this.url}/${id}`);
        return response;
    }
}