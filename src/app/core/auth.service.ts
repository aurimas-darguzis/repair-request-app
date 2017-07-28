import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

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
