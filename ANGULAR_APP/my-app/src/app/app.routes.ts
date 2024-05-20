import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
    {'path':'','title':'Home', component:HomeComponent},
    {'path':'products','title':'Products',component:ProductsComponent},
    {'path':'services','title':'Services',component:ServicesComponent},
    {'path':'blog','title':'Blog',component:BlogComponent},
    {'path':'about-us','title':'About Us',component:AboutUsComponent},
    {'path':'contact-us','title':'Contact Us',component:ContactUSComponent},
    {'path':'login','title':'Login',component:LoginComponent}
];
