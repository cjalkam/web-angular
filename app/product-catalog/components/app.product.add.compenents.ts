import {Component,Output,EventEmitter} from '@angular/core' 
import {ProductModel} from '../model/app.product.model' 


@Component({ 
selector:'product-add', 

template: ` 
<div> 
<input type="number" [(ngModel)] = "product.id"> 
<input type="text" [(ngModel)] = "product.name" placeholder="Eneter the product name"> 
<select [value] = "product.premium" (change)="changePremium(productPremium.value)" #productPremium> 
<option value=false>False</option> 
<option value=true>True</option> 
</select> 

<input type="text" [(ngModel)] = "product.type" placeholder="Enter the product type"> 
<button (click)= "addProduct()">+</button> 
</div> 


` 


}) 

export class ProductAddComponent { 

product:ProductModel={id:0,name:'',premium:false,type:''} 

@Output() onAdd : EventEmitter<ProductModel> = new EventEmitter<ProductModel>(); 


addProduct(){ 

console.log(this.product); 
this.onAdd.emit(this.product); 
} 

changePremium(premiumValue){ 
console.log(premiumValue); 
if(premiumValue === "true"){ 
this.product.premium = true; 
} 
else { 
this.product.premium = false; 
} 

} 

}