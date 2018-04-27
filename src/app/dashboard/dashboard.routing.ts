import {DashboardComponent} from './dashboard.component';
import {ModuleWithProviders} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from '../inbox/inbox.component';
import { ProductsComponent } from '../products/products.component';


export const DashboardRouting: ModuleWithProviders = RouterModule.forChild([
  {path: '', component: DashboardComponent, data: {title: 'dashboard'},
    children: [
      { path: '', redirectTo: 'inbox', pathMatch: 'full'},
      {path: 'inbox', component: InboxComponent, data: {title: 'InboxComponent'}},
      {path: 'submitted', component: ProductsComponent, data: {title: 'ProductsComponent'}},
    ]},
]);


