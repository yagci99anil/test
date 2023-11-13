import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private authService: AuthService) {}

  signUp(email: string, password: string) {
    this.authService.signUp(email, password)
      .then(() => console.log('Sign up successful'))
      .catch(error => console.error('Sign up error', error));
  }

  signIn(email: string, password: string) {
    this.authService.signIn(email, password)
      .then(() => console.log('Sign in successful'))
      .catch(error => console.error('Sign in error', error));
  }

  signOut() {
    this.authService.signOut()
      .then(() => console.log('Sign out successful'))
      .catch(error => console.error('Sign out error', error));
  }
}
