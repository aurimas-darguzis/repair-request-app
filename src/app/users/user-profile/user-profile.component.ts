import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  title = 'user-profile component';

  constructor(public auth: AuthService) {
  }

  ngOnInit() {
  }

  logout() {
    this.auth.signOut();
  }
}
