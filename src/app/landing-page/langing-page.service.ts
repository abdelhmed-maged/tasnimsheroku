import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx';
import {environment} from '../../environments/environment';
@Injectable()
export class LangingPageService {

  private rootUrl = environment.rootUrl;
  constructor(private http: HttpClient ) { }
  getData() {
    return  this.http.get(this.rootUrl).map((response: Response) => response.json());
  }
  sendData( contactUsData: any) {
    const contactUsBody = JSON.stringify(contactUsData);
    return this.http.post('https://tasnim-695fa.firebaseio.com/homePageEmails.json', contactUsBody).map(
      (response: Response) => response.json()
    );
  }
  deleteData(contactUsData: any): void {
  }
}
