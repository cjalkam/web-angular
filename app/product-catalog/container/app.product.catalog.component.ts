/*import {Component} from '@angular/core'; 
import {ProductService} from '../service/app.product.service' 
import {ProductModel} from '../model/app.product.model' 
@Component({ 
selector:'product-catalog', 
template:` 
<div *ngFor= "let product of products"> 
{{product.name}} - {{product.type}} 

</div> 
` 

}) 
export class ProductCatalogComponent{ 
products:ProductModel[]; 
constructor(private productService:ProductService){ 
this.products = this.productService.getProducts(); 
} */

/*
import {Component,OnInit} from '@angular/core'; 
import {ProductService} from '../service/app.product.service' 
import {ProductModel} from '../model/app.product.model' 
@Component({ 
selector:'product-catalog', 
template:` 

<div *ngFor= "let product of products"> 
<product-item [product]= "product"></product-item> 

</div> 
` 

}) 
export class ProductCatalogComponent implements OnInit{ 
products:ProductModel[]; 
constructor(private productService:ProductService){ 

} 

ngOnInit(){ 
this.products = this.productService.getProducts(); 
} 


}*/
/*
import {Component,OnInit} from '@angular/core'; 
import {ProductService} from '../service/app.product.service' 
import {ProductModel} from '../model/app.product.model' 
@Component({ 
selector:'product-catalog', 
template:` 
<div *ngFor= "let product of products"> 
{{product.name}} 

</div> 

<h3> *********************************</h3> 
<div *ngFor= "let product of products"> 
<product-item [product]= "product" (onChange)="handleChange($event)"></product-item> 

</div> 
` 

}) 
export class ProductCatalogComponent implements OnInit{ 
products:ProductModel[]; 
constructor(private productService:ProductService){ 

} 

ngOnInit(){ 
this.products = this.productService.getProducts(); 
} 

handleChange(product:ProductModel){ 
this.products = this.products.map(target => { 
if(target.id === product.id){ 
return Object.assign({},target,product); 
} 

return target; 

}) 

} 


}*/

/*
import {Component,OnInit} from '@angular/core'; 
import {ProductService} from '../service/app.product.service' 
import {ProductModel} from '../model/app.product.model' 
@Component({ 
selector:'product-catalog', 
template:` 
<div> 

<button (click)= "showNewProductDetails()">Add</button> 

</div> 
<div *ngIf="showProductDetails"> 

<product-add (onAdd)="onProductAdd($event)"></product-add> 

</div> 

<h3> *********************************</h3> 
<div *ngFor= "let product of products"> 
<product-item [product]= "product" (onChange)="handleChange($event)"></product-item> 

</div> 

` 

}) 
export class ProductCatalogComponent implements OnInit{ 
products:ProductModel[]; 
showProductDetails:boolean = false; 
constructor(private productService:ProductService){ 

} 

ngOnInit(){ 
this.products = this.productService.getProducts(); 
} 

handleChange(product:ProductModel){ 
this.products = this.products.map(target => { 
if(target.id === product.id){ 
return Object.assign({},target,product); 
} 

return target; 

}) 

} 

showNewProductDetails(){ 
this.showProductDetails = true; 
} 

onProductAdd(product:ProductModel){ 

this.products = [...this.products,product]; 


} 


}*/

/*
import {Component,OnInit} from '@angular/core'; 
import {ProductService} from '../service/app.product.service' 
import {ProductModel} from '../model/app.product.model' 
@Component({ 
selector:'product-catalog', 
template:` 
<div> 

<button (click)= "showNewProductDetails()">Add</button> 

</div> 
<div *ngIf="showProductDetails"> 

<product-add (onAdd)="onProductAdd($event)"></product-add> 

</div> 

<h3> *********************************</h3> 
<div *ngFor= "let product of products"> 
<product-item [product]= "product" (onChange)="handleChange($event)" (onDelete)="onDeleteProduct($event)"></product-item> 

</div> 

` 

}) 

export class ProductCatalogComponent implements OnInit{ 
products:ProductModel[]; 
showProductDetails:boolean = false; 
constructor(private productService:ProductService){ 

} 

ngOnInit(){ 
this.productService.getProducts().subscribe((productArray:ProductModel[])=>{ 
this.products = productArray; 

}) 
} 

handleChange(product:ProductModel){ 
this.products = this.products.map(target => { 
if(target.id === product.id){ 
return Object.assign({},target,product); 
} 

return target; 

}); 

} 

showNewProductDetails(){ 
this.showProductDetails = true; 
} 

onProductAdd(product:ProductModel){ 

this.products = [...this.products,product]; 


} 

onDeleteProduct(deletedProduct:ProductModel){ 
this.products = this.products.filter(product=> product.id !== deletedProduct.id); 
} 


}*/


import {Component,OnInit} from '@angular/core'; 
import {ProductService} from '../service/app.product.service' 
import {ProductModel} from '../model/app.product.model' 
@Component({ 
selector:'product-catalog', 
template:` 

<div> 
{{products?.length}} 
</div> 
<div> 

<button (click)= "showNewProductDetails()">Add</button> 

</div> 
<div *ngIf="showProductDetails"> 

<product-add (onAdd)="onProductAdd($event)"></product-add> 

</div> 

<h3> *********************************</h3> 
<div *ngFor= "let product of products"> 
<product-item [product]= "product" (onChange)="handleChange($event)" (onDelete)="onDeleteProduct($event)"></product-item> 

</div> 

` 

}) 

export class ProductCatalogComponent implements OnInit{ 
products:ProductModel[]; 
showProductDetails:boolean = false; 
constructor(private productService:ProductService){ 

} 

ngOnInit(){ 
this.productService.getProducts().subscribe((productArray:ProductModel[])=>{ 
this.products = productArray; 

}) 
} 

handleChange(product:ProductModel){ 
this.productService.updateProduct(product).subscribe((res:ProductModel) =>{ 
this.products = this.products.map(target => { 
if(target.id === product.id){ 
return Object.assign({},target,product); 
} 

return target; 

}); 

}); 


} 

showNewProductDetails(){ 
this.showProductDetails = true; 
} 

onProductAdd(product:ProductModel){ 

this.products = [...this.products,product]; 


} 

onDeleteProduct(deletedProduct:ProductModel){ 
this.productService.removeProduct(deletedProduct).subscribe((res:ProductModel)=>{ 
this.products = this.products.filter(product=> product.id !== deletedProduct.id); 
}) 

} 


}