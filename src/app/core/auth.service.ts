import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthProvider } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  authState: any;

  constructor(private http: Http,
              private af: AngularFireModule,
              private db: AngularFireDatabase
  ) {
    // af.auth.subscribe((auth) => {
    //   this.authState = auth;
    // });
   }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user
  get currentUser(): any {
    return this.authenticated ? this.authState.auth : null;
  }

  // Returns current user UID
  // TODO:

  getProfile(userName: string) {
    return this.http
      .get(`https://api.github.com/users/${userName}`)
      .map((response: Response) => response.json());
  }

  login(username: string, password: string) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({ headers });

    return this.http
      .post(
         'https://blacksonic.eu.auth0.com.auth0.com/usernamepassword/login',
         { username, password, client_id: 'YOUR_CLIENT_ID'},
         options
      )
      .map((response: Response) => response.text());
  }


}
