import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, PreloadAllModules } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private angFireAuth : AngularFireAuth, private router: Router, private alerCtrl : AlertController) { }

  ngOnInit() {
  }

 
  async logIn(f) {
    //console.log(this.angFireAuth.signInWithEmailAndPassword(f['email'], f['password']));
    this.angFireAuth.signInWithEmailAndPassword(f['email'], f['password']).
    then(
      (reponse) => {
        console.log(reponse.user);
        localStorage.setItem('mytoken', reponse.user['refreshToken']);
        let uid = reponse.user['uid'];
        this.router.navigateByUrl('home/'+uid);
      },
      async error => {
        const alert = await this.alerCtrl.create({
          message : error.message,
          buttons : [{text : 'ok', role: 'cancel'}]
        });
        await alert.present();
      }
      );

    }

    goToRegister() {
      this.router.navigateByUrl('/register')
    }

    goToResetPwd() {
      this.router.navigateByUrl('/pwd-reset')
    }

}
