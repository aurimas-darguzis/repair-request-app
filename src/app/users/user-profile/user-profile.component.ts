import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  title = 'user-profile component';

  constructor(private auth: AuthService) {
    console.log(this.auth);
  }

  ngOnInit() {
  }

  logout() {
    this.auth.signOut();
  }

}
