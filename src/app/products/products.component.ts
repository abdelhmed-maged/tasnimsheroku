import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Response } from '@angular/http';
import {Http, HttpModule} from '@angular/http';
import {FormGroup, FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
import { ProductService } from './product.service';
import { Upload } from '../shared/upload';
import * as _ from "lodash";

import 'rxjs/Rx';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  addNewPartner;
  url = '';
  previewImage = false;
  selectedFiles: FileList;
  currentUpload: Upload;
  constructor(private modalService: BsModalService,

              private productservice: ProductService) {
    this.addNewPartner = new FormGroup({
      name: new FormControl('', Validators.minLength(3)),
      image: new FormControl( [Validators.required])
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    // this.successMessage = true;
    // setTimeout(() => {
    // this.successMessage = false;
    // },3000 ) ;
    this.productservice.sendData(this.addNewPartner.value).subscribe(
      () => {
        setTimeout(() => {
        }, 3000 ) ;
        this.addNewPartner.reset() ;
        this.previewImage = false;

      },
      () => { console.log('Error happened');
        setTimeout(() => {
        }, 3000 ) ;
        this.addNewPartner.reset() ;
        this.previewImage = false;
      },
      () => {
        setTimeout(() => {
        }, 3000 ) ;
        this.addNewPartner.reset() ;
        this.previewImage = false;
      } ,
    );
  }
  //
  // onSelectFile(event) { // called each time file input changes
  //   this.previewImage = true;
  //   if (event.target.files && event.target.files[0]) {
  //     const reader = new FileReader();
  //
  //     reader.readAsDataURL(event.target.files[0]); // read file as data url
  //
  //     reader.onload = (event) => { // called once readAsDataURL is completed
  //       this.url = event.target.result;
  //     };
  //   }
  // }
  //
  //
  //
  // detectFiles(event) {
  //   this.selectedFiles = event.target.files;
  // }
  //
  // uploadSingle() {
  //   const file = this.selectedFiles.item(0)
  //   this.currentUpload = new Upload(file);
  //   this.productservice.pushUpload(this.currentUpload);
  // }
  //
  // uploadMulti() {
  //   const files = this.selectedFiles;
  //   const filesIndex = _.range(files.length);
  //   _.each(filesIndex, (idx) => {
  //     this.currentUpload = new Upload(files[idx]);
  //     this.productservice.pushUpload(this.currentUpload);
  //   }
  //   );
  // }
}
