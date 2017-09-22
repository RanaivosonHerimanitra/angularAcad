import { NgModule } from '@angular/core';
import {ProductListComponent} from 'app/products/product-list/product-list.component';
import {ProductDetailComponent} from 'app/products/product-detail/product-detail.component';
import {OrderBy} from 'app/products/orderBy.pipe';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductsRoutingModule} from 'app/products/products-routing.module';
import {ProductService} from 'app/services/product.service';
import {FavouriteService} from 'app/services/favourite.service';
import { ProductInsertComponent } from './product-insert/product-insert.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule,FormsModule, 
        ProductsRoutingModule],
    exports: [ProductListComponent],
    declarations: [ProductListComponent, ProductDetailComponent, 
        OrderBy, ProductInsertComponent],
    providers: [ProductService,FavouriteService]
})
export class ProductsModule { 

}
