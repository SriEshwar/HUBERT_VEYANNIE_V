import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductComponent } from './Components/product/product.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AdminComponent } from './Components/admin/admin.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { AuthGuard } from './Guard/auth.guard';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"cart", component:CartComponent},
    {path:"product", component:ProductComponent},
    {path:"navbar", component:NavbarComponent},
    {path:"admin", component:AdminComponent},
    {path:"login", component:LoginComponent},
    {path:"registration", component:RegistrationComponent},
    {path:"profile", component:UserProfileComponent, canActivate: [AuthGuard]}
];
