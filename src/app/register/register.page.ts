import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private angFireAuth : AngularFireAuth, private router: Router, private alerCtrl : AlertController) { }

  ngOnInit() {
  }

  register(f) {
    console.log(f);
    this.angFireAuth.createUserWithEmailAndPassword(f['email'], f['password']).then(

      () => {
        this.router.navigateByUrl('home');
      },
      async error => {
        const alert = await this.alerCtrl.create({
          message : error.message,
          buttons : [{text : 'ok', role: 'cancel'}]
        });
        await alert.present();
      }
    )

  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

}
