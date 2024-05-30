import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductComponent } from './Components/product/product.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AdminComponent } from './Components/admin/admin.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"cart", component:CartComponent},
    {path:"product", component:ProductComponent},
    {path:"navbar", component:NavbarComponent},
    {path:"admin", component:AdminComponent},
];
