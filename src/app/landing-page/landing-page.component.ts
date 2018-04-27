import { Component, TemplateRef, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import {Http, HttpModule} from '@angular/http';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import {Validators} from '@angular/forms';
import 'rxjs/Rx';
import { LangingPageService } from './langing-page.service';
declare var require: any;

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [LangingPageService],

})
export class LandingPageComponent implements OnInit {
  dropDownResponsive = false;
  payment = true;
  it = true;
  AllActive = true;
  ItActive = false;
  PaymentActive = false;
  itActive() {
    this.it = true;
    this.payment = false;
    this.ItActive = true;
    this.AllActive = false;
    this.PaymentActive = false;
  }
  paymentActive() {
    this.it = false;
    this.payment = true;
    this.ItActive = false;
    this.AllActive = false;
    this.PaymentActive = true;
  }
  allActive() {
    this.it = true;
    this.payment = true;
    this.ItActive = false;
    this.AllActive = true;
    this.PaymentActive = false;
  }
  constructor(
              private langingpageservice: LangingPageService
  ) {

  }
  ngOnInit() {
  }
}
