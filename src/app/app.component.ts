import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {

    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home',
            action: () => { }
        },
        {
            title: 'Sign In',
            url: '/signin',
            icon: 'log-in',
            action: () => { }
        },
        {
            title: 'Sign Up',
            url: '/signup',
            icon: 'list',
            action: () => { }
        },
        {
            title: 'LogOut',
            url: '',
            icon: 'log-out',
            action: () => { this.authService.logout(); }
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private authService: AuthService

    ) {
        // status bar white
        this.statusBar.backgroundColorByHexString('#ffffff');

        // init app
        this.initializeApp();
    }


    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

}
