import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';

import 'rxjs/Rx';
import {environment} from '../../environments/environment';
@Injectable()
export class InboxService {
  private rootUrl = environment.rootUrl;
  constructor(private http: HttpClient,
              ) {
  }
  getData() {
    return  this.http.get(this.rootUrl + 'homePageEmails.json');
  }
  deleteUser(singleobject) {
    return this.http.delete('https://tasnim-695fa.firebaseio.com/homePageEmails/'  + singleobject + '.json')
      .map(res => res);
  }
}



