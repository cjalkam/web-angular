/*import {NgModule} from '@angular/core' 
import {ProductCatalogComponent} from './container/app.product.catalog.component' 
import {ProductService} from './service/app.product.service' 
import {ProductItemComponent} from './components/app.product.item.component' 
import {CommonModule} from '@angular/common' 

@NgModule({ 
imports:[CommonModule], 
declarations:[ProductCatalogComponent,ProductItemComponent], 
providers:[ProductService], 
exports:[ProductCatalogComponent] 

}) 
export class ProductCatalogModule { 

}*/
/*import {NgModule} from '@angular/core' 
import {ProductCatalogComponent} from './container/app.product.catalog.component' 
import {ProductService} from './service/app.product.service' 
import {ProductItemComponent} from './components/app.product.item.component' 
import {CommonModule} from '@angular/common' 
import {FormsModule} from '@angular/forms' 

@NgModule({ 
imports:[CommonModule,FormsModule], 
declarations:[ProductCatalogComponent,ProductItemComponent], 
providers:[ProductService], 
exports:[ProductCatalogComponent] 

}) 
export class ProductCatalogModule { 

}*/

/*
import {NgModule} from '@angular/core' 
import {ProductCatalogComponent} from './container/app.product.catalog.component' 
import {ProductService} from './service/app.product.service' 
import {ProductItemComponent} from './components/app.product.item.component' 
import {CommonModule} from '@angular/common' 
import {FormsModule} from '@angular/forms' 
import {ProductAddComponent} from './components/app.product.add.compenents' 

@NgModule({ 
imports:[CommonModule,FormsModule], 
declarations:[ProductCatalogComponent,ProductItemComponent,ProductAddComponent], 
providers:[ProductService], 
exports:[ProductCatalogComponent] 

}) 
export class ProductCatalogModule { 

}

*/

/*

import {NgModule} from '@angular/core' 
import {ProductCatalogComponent} from './container/app.product.catalog.component' 
import {ProductService} from './service/app.product.service' 
import {ProductItemComponent} from './components/app.product.item.component' 
import {CommonModule} from '@angular/common' 
import {FormsModule} from '@angular/forms' 
import {ProductAddComponent} from './components/app.product.add.compenents' 
import {HttpModule} from '@angular/http' 

@NgModule({ 
imports:[CommonModule,FormsModule,HttpModule], 
declarations:[ProductCatalogComponent,ProductItemComponent,ProductAddComponent], 
providers:[ProductService], 
exports:[ProductCatalogComponent] 

}) 
export class ProductCatalogModule { 

}

*/


import {NgModule} from '@angular/core' 
import {ProductCatalogComponent} from './container/app.product.catalog.component' 
import {ProductService} from './service/app.product.service' 
import {ProductItemComponent} from './components/app.product.item.component' 
import {CommonModule} from '@angular/common' 
import {FormsModule} from '@angular/forms' 
import {ProductAddComponent} from './components/app.product.add.compenents' 
import {HttpModule} from '@angular/http' 
import {ProductListComponent} from './components/app.product.list.component' 


@NgModule({ 
imports:[CommonModule,FormsModule,HttpModule], 
declarations:[ProductCatalogComponent,ProductItemComponent,ProductAddComponent,ProductListComponent], 
providers:[ProductService], 
exports:[ProductCatalogComponent] 

}) 
export class ProductCatalogModule { 

}