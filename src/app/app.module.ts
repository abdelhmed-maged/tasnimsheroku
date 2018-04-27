import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LangingPageService } from './landing-page/langing-page.service';

import { FullLayoutModule } from "./full-layout/full-layout.module";
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

@NgModule({
  declarations: [
    AppComponent,
    // FullLayoutComponent,
    LandingPageComponent,
    AboutUsComponent,
    LandingPageFooterComponent,
    LandingPageHeaderComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
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
  providers: [  { provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
