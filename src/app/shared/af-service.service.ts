import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { observable } from 'rxjs/symbol/observable';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {User} from '../shared/user';
import { switchMap } from 'rxjs/operators' ;
@Injectable()
export class AfService {
user$: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth,
              public afs: AngularFirestore) {
    this.user$ = this.afAuth.authState.switchMap(user => {
      if (user) {
        return this.afs.doc<User>('users/${user.uid}').valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }
loginWithGoogle() {

    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth.signInWithPopup(provider).then((credential) => {
      this.updateUser(credential.user);
    });
}
updateUser(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc('users/${user.uid}');
  const data: User = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    roles: {
      admin: true,
    }
  };
return userRef.set(data);
  }

logout() {
    this.afAuth.auth.signOut();
}
}
