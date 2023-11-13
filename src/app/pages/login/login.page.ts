
// login.page
import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router, private alertCtrl: AlertController) {}

  loginWithFirebase() {
    console.log(this.username, this.password)
    this.authService.loginWithFirebase(this.username, this.password)
      .then((userCredential) => {
        this.router.navigateByUrl('/home')
        console.log(userCredential)
      })
      .catch((error) => {
        // Handle login error here
        this.alertCtrl.create({
          message: 'Kullanıcı adı ve ya şifre yanlış',
          buttons: [
            {
              text: 'Ok',
            
            }
          ]
        }).then((alert) => {
          alert.present();
        })
        console.error(error);
      });
  }
}
