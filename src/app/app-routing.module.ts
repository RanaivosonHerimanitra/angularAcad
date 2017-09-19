import {NgModule} from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import {HomeComponent} from 'app/common/home.component';
import {ContactComponent} from 'app/common/contact.component';
import {AdminComponent} from 'app/common/admin.component';
import {ErrorComponent} from 'app/common/error.component';

const routes : Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'contact',component:ContactComponent},
    {path:'admin',component:AdminComponent},
    {path:'**',component:ErrorComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
})
export class AppRoutingModule {}
//export const routedComponents = [AppComponent];

