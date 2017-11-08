import {Component,Input,Output,EventEmitter} from '@angular/core' 
import {ProductModel} from '../model/app.product.model' 


@Component({ 
selector:'product-list', 

template: ` 
<ul class="list-group"> 
<li class="list-group-item" *ngFor="let product of products"> 
{{product.name}} 
<span style="float:right"> 
<button class="btn btn-success" (click)="showDetails(product)">Details</button> 
</span> 
</li> 

</ul> 



` 


}) 

export class ProductListComponent{ 

@Input() products : ProductModel; 
@Output() onDetails:EventEmitter<ProductModel> = new EventEmitter<ProductModel>(); 

showDetails(product:ProductModel){ 
console.log("Product List component " , product); 
this.onDetails.emit(product); 
} 

}