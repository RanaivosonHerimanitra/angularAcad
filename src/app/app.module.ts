import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import {ProductListComponent} from './products/product-list/product-list.component';
import { AppComponent } from './app.component';
//import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductsModule} from 'app/products/products.module';
import {HomeComponent} from 'app/common/home.component';
import {ContactComponent} from 'app/common/contact.component';
import {AdminComponent} from 'app/common/admin.component';
import {AppRoutingModule} from 'app/app-routing.module';
import {ErrorComponent} from 'app/common/error.component';
//import {OrderBy} from 'app/products/orderBy.pipe';
@NgModule({
  declarations: [
    AppComponent,HomeComponent,ContactComponent,AdminComponent,ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ProductsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
