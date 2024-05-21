import { Routes } from '@angular/router';
import { AccountComponent } from './account-task/account-task.component';
import { Component } from '@angular/core';
import { ShirtComponent } from './shirt/shirt.component';

export const routes: Routes = [
    {'path':'AccountTask',component:AccountComponent},
    {'path':'Shirt',component:ShirtComponent}
];
