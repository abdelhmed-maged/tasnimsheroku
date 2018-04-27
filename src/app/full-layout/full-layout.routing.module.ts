import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from '../inbox/inbox.component';
import { ProductsComponent } from '../products/products.component';
const routesTwo: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'inbox', component: InboxComponent }

];
@NgModule({

  imports: [CommonModule, RouterModule.forChild(routesTwo) ],
  exports: [ RouterModule ],

  declarations: [
  ]
})
export class FullLayoutRoutingModule { }
