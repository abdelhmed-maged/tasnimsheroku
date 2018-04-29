import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
// import { FullLayoutComponent } from './full-layout/full-layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
// import { LangingPageService } from './landing-page/langing-page.service';

import { FullLayoutModule } from './full-layout/full-layout.module';
import { CarouselModule, BsDropdownModule, ModalModule  } from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http} from '@angular/http';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';

import { APP_BASE_HREF } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { LandingPageFooterComponent } from './landing-page-footer/landing-page-footer.component';
import { LandingPageHeaderComponent } from './landing-page-header/landing-page-header.component';
 // Firebase importing
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { LoginPageComponent } from './login-page/login-page.component';
import { CyberForceComponent } from './products/cyber-force/cyber-force.component';
import { TasnimProductControlComponent } from './products/tasnim-product-control/tasnim-product-control.component';
import { AllProductComponent } from './products/all-product/all-product.component';
import { ProductAndServiceComponent } from './products/product-and-service/product-and-service.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { AfService } from './shared/af-service.service';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';
import { LoginGuardGuard } from './login-guard.guard';
import { PartnersComponent } from './partners/partners.component';
// import { ProductService } from './products/product.service';

@NgModule({
  declarations: [
    AppComponent,
    // FullLayoutComponent,
    LandingPageComponent,
    AboutUsComponent,
    LandingPageFooterComponent,
    LandingPageHeaderComponent,
    LoginPageComponent,
    CyberForceComponent,
    TasnimProductControlComponent,
    AllProductComponent,
    ProductAndServiceComponent,
    ContactUsFormComponent,
    ContactUsPageComponent,
    PartnersComponent

  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),

    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FullLayoutModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [  { provide: APP_BASE_HREF, useValue : '/' }, AfService , AngularFireAuth, LoginGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
