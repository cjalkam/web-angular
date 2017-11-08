/*import {Component,Input} from '@angular/core' 
import {ProductModel} from '../model/app.product.model' 


@Component({ 
selector:'product-item', 

template: ` 
<div> 
{{product.name}} - {{product.type}} 

</div> 

` 


}) 

export class ProductItemComponent{ 

@Input() product : ProductModel 

}*/

/*

import {Component,Input,OnChanges,Output,EventEmitter} from '@angular/core' 
import {ProductModel} from '../model/app.product.model' 


@Component({ 
selector:'product-item', 

template: ` 
<div> 
<input type="text" [(ngModel)]="product.name"> 
<button (click) = "emitProduct()"> Emit </button> 
</div> 


` 


}) 

export class ProductItemComponent implements OnChanges{ 

@Input() product : ProductModel 

@Output() onChange:EventEmitter<ProductModel> = new EventEmitter<ProductModel>(); 

ngOnChanges(changes){ 
console.log("OnChanges"); 
if(changes.product){ 
this.product = Object.assign({},changes.product.currentValue); 
} 
} 

emitProduct(){ 
this.onChange.emit(this.product); 
} 


}*/


import {Component,Input,OnChanges,Output,EventEmitter} from '@angular/core' 
import {ProductModel} from '../model/app.product.model' 


@Component({ 
selector:'product-item', 

template: ` 
<ul class="list-group"> 
<li class="list-group-item"> 
<input type="text" [(ngModel)]="product.name"> 
<button style="float:right" (click) = "emitProduct()"> Emit </button> 
<button style="float:right" (click) = "deleteProduct()">-</button> 
</li> 

</ul> 



` 


}) 

export class ProductItemComponent implements OnChanges{ 

@Input() product : ProductModel 


@Output() onChange:EventEmitter<ProductModel> = new EventEmitter<ProductModel>(); 

@Output() onDelete:EventEmitter<ProductModel> = new EventEmitter<ProductModel>(); 

ngOnChanges(changes){ 
console.log("OnChanges"); 
if(changes.product){ 
this.product = Object.assign({},changes.product.currentValue); 
} 
} 

emitProduct(){ 
this.onChange.emit(this.product); 
} 

deleteProduct(){ 
this.onDelete.emit(this.product); 
} 


}