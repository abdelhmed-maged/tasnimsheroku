import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
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
export class LandingPageComponent implements OnInit {contactSales;
  dropDownResponsive = false;
  payment = true;
  it = true;
  AllActive = true;
  ItActive = false;
  PaymentActive = false;
  unamePattern =
    '(?:[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])';
  modalRef: BsModalRef;
  successMessage = false;
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
  constructor(private modalService: BsModalService,

              private langingpageservice: LangingPageService
  ) {

    this.contactSales = new FormGroup({
      name: new FormControl('', Validators.minLength(3)),
      email: new FormControl('' , [Validators.pattern(this.unamePattern)] ),
      message: new FormControl('', Validators.minLength(3) || Validators.maxLength(256)),
      phone: new FormControl('',  Validators.minLength(11) || Validators.maxLength(18))
    });
  }
  ngOnInit() {
    this.langingpageservice.getData().subscribe(
      (data) => console.log(data)
    );
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  onSubmit() {
    // this.successMessage = true;
    // setTimeout(() => {
    // this.successMessage = false;
    // },3000 ) ;
    this.langingpageservice.sendData(this.contactSales.value).subscribe(
      function(response) { console.log('Success Response' + response);
        this.successMessage = true; },
      function(error) { console.log('Error happened' + error); },
      () => {
        this.successMessage = true ;
        setTimeout(() => {
          this.successMessage = false;
        }, 3000 ) ;
        this.contactSales.reset() ; } ,
    );
  }
}
