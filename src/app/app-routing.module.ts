import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CyberForceComponent } from './products/cyber-force/cyber-force.component';
import { TasnimProductControlComponent } from './products/tasnim-product-control/tasnim-product-control.component';
import { AllProductComponent } from './products/all-product/all-product.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { LoginGuardGuard } from './login-guard.guard';

const routes: Routes = [
//   { path: '', component: LandingPageComponent },
//   // {path: 'login', component: LoginPageComponent},
//   { path: 'about-us', component: AboutUsComponent },
//   { path: 'cyber-force', component: CyberForceComponent },
//   { path: 'tasnim-control', component: TasnimProductControlComponent },
//   { path: 'bussniss-line', component: AllProductComponent },
//   { path: 'contact-us', component: ContactUsPageComponent },
//   {
//     path: 'dashboard', component: FullLayoutComponent,
//     children: [
//       {
//         path: 'dashboard',
//         loadChildren: './full-layout/full-layout.module#FullLayoutModule',
//       }
//     ]
//   }
//
// ];
  { path: '', component: LandingPageComponent },
  {path: 'login', component: LoginPageComponent},
    { path: 'about-us', component: AboutUsComponent },
  { path: 'cyber-force', component: CyberForceComponent },
  { path: 'tasnim-control', component: TasnimProductControlComponent },
  { path: 'bussniss-line', component: AllProductComponent },
  { path: 'contact-us', component: ContactUsPageComponent },

  {
    path: '', component: FullLayoutComponent, canActivate: [LoginGuardGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: './full-layout/full-layout.module#FullLayoutModule',
      }
    ]
  }

];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],

})
export class AppRoutingModule {}
