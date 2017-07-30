import { Router } from '@angular/router';
import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  signInWithGithub(): void {
    this.auth.githubLogin()
      .then(() => this.afterSignIn());
  }

  signInWithGoogle(): void {
    this.auth.googleLogin()
      .then(() => this.afterSignIn());
  }

  signInWithFacebook(): void {
    this.auth.facebookLogin()
      .then(() => this.afterSignIn());
  }

  signInWithTwitter(): void {
    this.auth.twitterLogin()
      .then(() => this.afterSignIn());
  }

  signInAnonymously(): void {
    this.auth.anonymousLogin()
      .then(() => this.afterSignIn());
  }

  private afterSignIn(): void {
    this.router.navigate(['/']);
  }
}
