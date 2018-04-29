import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Upload } from '../shared/upload';
import 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { observable } from 'rxjs/symbol/observable';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';


@Injectable()
export class ProductService {
  private rootUrl = environment.rootUrl;

  constructor(private http: HttpClient,
  private af: AngularFireAuth  , private db: AngularFireDatabase) { }



  private basePath = '/uploads';
  uploads: FirebaseListObservable<Upload[]>;

  // pushUpload(upload: Upload) {
  //   const storageRef = firebase.storage().ref();
  //   const uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
  //
  //   uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
  //     (snapshot) =>  {
  //       // upload in progress
  //       upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     },
  //     (error) => {
  //       // upload failed
  //       console.log(error);
  //     },
  //     () => {
  //       // upload success
  //       upload.url = uploadTask.snapshot.downloadURL;
  //       upload.name = upload.file.name;
  //       this.saveFileData(upload);
  //     }
  //   );
  // }



  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
  }



  deleteUpload(upload: Upload) {
    this.deleteFileData(upload.$key)
      .then( () => {
        this.deleteFileStorage(upload.name);
      })
      .catch(error => console.log(error));
  }

  // Deletes the file details from the realtime db
  private deleteFileData(key: string) {
    return this.db.list(`${this.basePath}/`).remove(key);
  }

  // Firebase files must have unique names in their respective storage dir
  // So the name serves as a unique key
  private deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }




  getData() {
    return  this.http.get(this.rootUrl + 'homePageEmails.json');
  }
  sendData( contactUsData: any) {
    const contactUsBody = JSON.stringify(contactUsData);
    return this.http.post('https://tasnim-695fa.firebaseio.com/partners.json', contactUsBody).map(
      (response: Response) => response.json()
    );
  }
}
