import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from '../inbox/inbox.component';
import { ProductsComponent } from '../products/products.component';
import { LoginGuardGuard } from '../login-guard.guard';

const routesTwo: Routes = [
//   { path: 'products', component: ProductsComponent },
//   { path: 'inbox', component: InboxComponent }
// ];

  { path: 'products', component: ProductsComponent, data: {title: 'products'} , canActivate: [LoginGuardGuard] },
  { path: 'inbox', component: InboxComponent, data: {title: 'inbox'}, canActivate: [LoginGuardGuard] }
];
@NgModule({

  imports: [CommonModule, RouterModule.forChild(routesTwo) ],
  exports: [ RouterModule ],

  declarations: [
  ]
})
export class FullLayoutRoutingModule { }
