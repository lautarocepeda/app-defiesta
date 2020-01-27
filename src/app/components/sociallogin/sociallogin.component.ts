import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
    selector: 'app-sociallogin',
    templateUrl: './sociallogin.component.html',
    styleUrls: ['./sociallogin.component.scss'],
})
export class SocialloginComponent implements OnInit {

    constructor(public alertController: AlertController, private facebook: Facebook) { }


    //TODO agregar authprovider y auth_oui a la base de datos, para agregar los social login.
    async facebookLogin() {
        try {
            const fbResponse: FacebookLoginResponse = await this.facebook.login(['public_profile', 'email']);
            const fbAuthData = {
                id: fbResponse.authResponse.userID,
                access_token: fbResponse.authResponse.accessToken
            };
    
            
            const userData = await this.facebook.api('me?fields=id,name,email,picture.width(720).height(720).as(picture)', ['public_profile']);
            console.log(userData);    

        } catch(err) {
            console.error('[Login Facebook]', err);
        }

    }



    async instagramLogin() {
        const alert = await this.alertController.create({
            header: 'Facebook LogOut',
            message: 'Facebook LogOut',
            buttons: ['OK']
        });

        await this.facebook.logout().then( res => {
            alert.present();
        })
    }



    async googleLogin() {
        const alert = await this.alertController.create({
            header: 'Google Login',
            message: 'This is Google login',
            buttons: ['OK', 'CANCEL']
        });

        await alert.present();
    }



    ngOnInit() { }

}
