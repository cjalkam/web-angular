/*import {ProductModel} from '../model/app.product.model'

export class ProductService {
    getProducts():ProductModel[] {
    return [
                {id:1, name:'X-BOX', premium:true, type:'Electronics'}, 
                {id:2, name:'Tomotao', premium:false, type:'Vegetables'}
            ]
}

}*/
/*
import {Injectable} from '@angular/core' 
import {ProductModel} from '../model/app.product.model' 
import {Http,Response} from '@angular/http' 
import {Observable} from 'rxjs/Observable'; 
import 'rxjs/add/operator/map'; 


const PRODUCT_API:string = "/api/products" 

@Injectable() 
export class ProductService{ 


constructor(private http:Http){ 
console.log(this.http); 
} 

getProducts():Observable<ProductModel[]>{ 

return this.http.get(PRODUCT_API).map((response:Response) => 
response.json()); 



} 

*/

/*
import {Injectable} from '@angular/core' 
import {ProductModel} from '../model/app.product.model' 
import {Http,Response} from '@angular/http' 
import {Observable} from 'rxjs/Observable'; 
import 'rxjs/add/operator/map'; 


const PRODUCT_API:string = "/api/products" 

@Injectable() 
export class ProductService{ 


constructor(private http:Http){ 
console.log(this.http); 
} 

getProducts():Observable<ProductModel[]>{ 

return this.http.get(PRODUCT_API).map((response:Response) => 
response.json()); 



} 
// GET , POST , PUT , DELETE 
updateProduct(product:ProductModel):Observable<ProductModel>{ 
return this.http.put(`${PRODUCT_API}/${product.id}` , product). 
map((response:Response)=> response.json()); 
} 

removeProduct(product:ProductModel):Observable<ProductModel>{ 
return this.http.delete(`${PRODUCT_API}/${product.id}`). 
map((response:Response)=> response.json()); 
} 





}



}
*/

import {Injectable} from '@angular/core' 
import {ProductModel} from '../model/app.product.model' 
import {Http,Response,Headers,RequestOptions} from '@angular/http' 
import {Observable} from 'rxjs/Observable'; 
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch'; 
import 'rxjs/add/observable/throw'; 



const PRODUCT_API:string = "/api/products" 

@Injectable() 
export class ProductService{ 


constructor(private http:Http){ 
console.log(this.http); 
} 

getProducts():Observable<ProductModel[]>{ 

return this.http.get(PRODUCT_API).map((response:Response) => 
response.json()).catch(error=> Observable.throw(error.json)); 



} 
// GET , POST , PUT , DELETE 
updateProduct(product:ProductModel):Observable<ProductModel>{ 
let options = new RequestOptions({ 
headers: new Headers({ 
"Authorization":"XYZ-1234567", 
"Accept":"application/json" 

}) 
}); 
return this.http.put(`${PRODUCT_API}/${product.id}` , product,options). 
map((response:Response)=> response.json()); 
} 

removeProduct(product:ProductModel):Observable<ProductModel>{ 
return this.http.delete(`${PRODUCT_API}/${product.id}`). 
map((response:Response)=> response.json()); 
} 

fetchAProduct(id:number):Observable<ProductModel>{ 
return this.http.get(`${PRODUCT_API}/${id}`).map((response:Response) => 
response.json()).catch(error=> Observable.throw(error.json)); 
} 





}
