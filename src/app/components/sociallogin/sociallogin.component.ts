import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { AuthConstants } from 'src/app/services/auth-constant';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sociallogin',
    templateUrl: './sociallogin.component.html',
    styleUrls: ['./sociallogin.component.scss'],
})
export class SocialloginComponent implements OnInit {

    constructor(
        private router: Router,
        public alertController: AlertController,
        private facebook: Facebook,
        private authService: AuthService,
        private storageService: StorageService,
        private toastService: ToastService
    ) { }



    async facebookLogin() {
        try {
            const fbResponse: FacebookLoginResponse = await this.facebook.login(['public_profile', 'email']);
            const fbAuthData = {
                id: fbResponse.authResponse.userID,
                access_token: fbResponse.authResponse.accessToken
            };

            console.log(fbAuthData);


            this.authService.authFacebook(fbAuthData).subscribe(
                (res: any) => {

                    if (res.success) {
                        this.storageService.store(AuthConstants.AUTH, res).then(data => {
                            this.router.navigate(['/home']);

                            this.toastService.presentToast("Log In Facebook!");
                        }).catch(err => {
                            console.log('Sign In FACEBOOK Error => ', err);
                        });
                    } else if (res.error) {
                        this.toastService.presentToast(res.error);
                    }

                }, (err) => {
                    const error = err.error.error;
                    this.toastService.presentToast(error);
                }
            );

        } catch (err) {
            console.error('[Login Facebook Error]', err);
        }
    }



    async instagramLogin() {
        const alert = await this.alertController.create({
            header: 'Facebook LogOut',
            message: 'Facebook LogOut',
            buttons: ['OK']
        });

        await this.facebook.logout().then(res => {
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
