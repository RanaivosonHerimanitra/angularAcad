import {NgModule} from '@angular/core';
import {Routes , RouterModule} from '@angular/router';

import {ProductListComponent} from 'app/products/product-list/product-list.component';
import {ProductDetailComponent} from 'app/products/product-detail/product-detail.component';
import {ProductInsertComponent} from 'app/products/product-insert/product-insert.component';

const routes : Routes = [
    
    {path:'',component:ProductListComponent},
    {path:'insert',component:ProductInsertComponent},
    {path:':id',component:ProductDetailComponent}
    
    
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule],
})
export class ProductsRoutingModule {}
//export const routedComponents = [AppComponent];

