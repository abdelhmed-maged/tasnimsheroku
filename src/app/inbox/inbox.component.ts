import { Component, OnInit, TemplateRef } from '@angular/core';
import { Response } from '@angular/http';
import {Http, HttpModule} from '@angular/http';
import { BsModalService , BsModalRef } from 'ngx-bootstrap/modal';
import { InboxService } from './inbox.service';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  providers: [InboxService]
})
export class InboxComponent implements OnInit {
  dataItems: any[] = [];
  singleObject;
  keys = [];
  renderThisMessage;
  emailDeleted = false;
  modalRef: BsModalRef;
  constructor(private admininboxservice: InboxService,
              private modalService: BsModalService) {
  }

  ngOnInit() {


    this.admininboxservice.getData().subscribe(
      (data) => {
        this.singleObject = data;
        this.keys = Object.keys(this.singleObject);
        console.log('dataaaa', this.singleObject);
        const responseArray = [];
        // const responseKey = [];
        // let mergedArray: any[] = [];
        for (const key in data) {
          responseArray.push(data[key]);
          console.log(data[key].name);
        }
        this.dataItems = responseArray;
        console.log(this.dataItems);
      },
      function(error) { console.log('Error happened' + error); }

    );
  }
  deleteEmail(singleobject) {
    this.admininboxservice.deleteUser(singleobject).subscribe(
      (res: any) =>  console.log(res),
      function(error) { console.log('Error happened' + error) ; },
      () => {
        this.emailDeleted = true;
        setTimeout(() => {
          this.emailDeleted = false;
        }, 3000 ) ;
        this.admininboxservice.getData().subscribe(
          (data) => {
            this.singleObject = data;
            this.keys = Object.keys(this.singleObject);
            console.log('dataaaa', this.singleObject);
            const responseArray = [];
            // const responseKey = [];
            // let mergedArray: any[] = [];
            for (const key in data) {
              responseArray.push(data[key]);
              console.log(data[key].name);
            }
            this.dataItems = responseArray;
            console.log(this.dataItems);
          },
          function(error) { console.log('Error happened' + error); }

        ); } );
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  viewEmail(selectedMessage) {
    this.renderThisMessage  = selectedMessage;
  }
}
