import { Http, Response } from '@angular/http';
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

}
