import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sociallogin',
  templateUrl: './sociallogin.component.html',
  styleUrls: ['./sociallogin.component.scss'],
})
export class SocialloginComponent implements OnInit {

  constructor(public alertController: AlertController) { }


  
  async facebookLogin()
  {
      const alert = await this.alertController.create({
          header: 'Facebook Login',
          message: 'This is Facebook login',
          buttons: ['OK', 'CANCEL']
      });

      await alert.present();
  }

  async instagramLogin()
  {
    const alert = await this.alertController.create({
        header: 'Instagram Login',
        message: 'This is Instagram login',
        buttons: ['OK', 'CANCEL']
    });

    await alert.present();
  }

  async googleLogin()
  {
    const alert = await this.alertController.create({
        header: 'Google Login',
        message: 'This is Google login',
        buttons: ['OK', 'CANCEL']
    });

    await alert.present();
  }


  ngOnInit() {}

}
