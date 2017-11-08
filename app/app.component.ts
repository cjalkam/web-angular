/*import {Component} from '@angular/core'

interface Product{
  name:string;
  type:string;
  premium:boolean;
}

@Component({
  selector:'my-app',
  styleUrls:['app.component.scss'],
  template: `
      <div class="myApp" >
    

       <div *ngFor="let product of products; let i=index">
       
       <div> *************** </div>
          <div>
            <label>{{i}} : {{product.name}}</label>
          </div>
          <div>
            <label>{{product.type}}</label>
          </div>
          <div>
              <span  class="status" [ngClass]="{'premium':product.premium,
                                                'non-premium':!product.premium}"></span>
               <label>{{product.premium}}</label>
           </div>
       </div>
        
 
      </div>

  `


})

export class AppComponent{
  header:string = "This is first Angular application";
  hide:boolean = false;
  amount:string = "100";

  products:Product[] = [{
    name:'Harry potter',
    type:'Book',
    premium:true
  },

  {
    name:'Singapore Math',
    type:'Book',
    premium:false
  },

  {
    name:'Carrom board',
    type:'Book',
    premium:false
  }

  ]

  handleChange(event){

    this.amount  =  event.target.value;
    console.log(this.amount);

    
  }

  handleClick(amountValue){
    this.amount = amountValue;
    console.log('handle click ', this.amount);
  }

  handleModelChange(value){
    this.amount = value;
    console.log("Through ngModel", this.amount);
  }



}*/


import {Component} from '@angular/core' 

interface Product{ 
name:string; 
type:string; 
premium:boolean; 
} 

@Component({ 
selector:'my-app', 
styleUrls:['app.component.scss'], 
template: ` 
<product-catalog></product-catalog> 

` 


}) 

export class AppComponent{ 



}