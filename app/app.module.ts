/*import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppComponent} from './app.component'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

@NgModule({
  imports:[BrowserModule,FormsModule,CommonModule],
  declarations:[AppComponent],
  bootstrap:[AppComponent]

})
export class AppModule {}*/

import {NgModule} from '@angular/core' 
import {BrowserModule} from '@angular/platform-browser' 
import {AppComponent} from './app.component' 
import {CommonModule} from '@angular/common' 
import {FormsModule} from '@angular/forms' 
import {ProductCatalogModule} from './product-catalog/app.product.catalog.module' 
@NgModule({ 
imports:[BrowserModule,FormsModule,CommonModule,ProductCatalogModule], 
declarations:[AppComponent], 
bootstrap:[AppComponent] 

}) 
export class AppModule {

  
}