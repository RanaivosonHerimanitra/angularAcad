import { NgModule } from '@angular/core';
import {ProductListComponent} from 'app/products/product-list/product-list.component';
import {ProductDetailComponent} from 'app/products/product-detail/product-detail.component';
import {OrderBy} from 'app/products/orderBy.pipe';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [ProductListComponent],
    declarations: [ProductListComponent, ProductDetailComponent, OrderBy],
    providers: []
})
export class ProductsModule { 

}
