import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { InboxComponent } from '../inbox/inbox.component';
import { FullLayoutComponent } from './full-layout.component';
import { ProductsComponent } from '../products/products.component';
import { FullLayoutRoutingModule } from './full-layout.routing.module';
import { LoginGuardGuard } from '../login-guard.guard';

@NgModule({
  imports: [
    CommonModule,
    FullLayoutRoutingModule
  ],
  declarations: [
    FullLayoutComponent,
    DashboardComponent,
                 ProductsComponent,
    InboxComponent]
})
export class FullLayoutModule { }
