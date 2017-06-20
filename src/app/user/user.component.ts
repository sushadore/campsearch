import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
// import { Observable } from 'rxjs/Observable';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {

  // user: Observable<firebase.User>;
  //
  // constructor(public afAuth: AngularFireAuth) {
  //   this.user = afAuth.authState;
  // }
  //
  // login() {
  //   this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }
  //
  // logout() {
  //   this.afAuth.auth.signOut();
  // }
}
