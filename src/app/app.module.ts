import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ProductListComponent} from './products/product-list/product-list.component';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {OrderBy} from 'app/products/orderBy.pipe';

@NgModule({
  declarations: [
    AppComponent, ProductListComponent, ProductDetailComponent, OrderBy
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ProductListComponent]
})
export class AppModule { }
