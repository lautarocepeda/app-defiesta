import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';


@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.page.html',
    styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {


    welcomeData = {
        img: 'assets/slide-4.png',
        title: 'Bienvenido/a',
        subtitle: 'Creá una cuenta y comenzá a disfrutar de los mejores beneficios'
    };


    constructor(
        private router: Router
    ) {

        btoa('Hello');
    }


    ngOnInit() {
        //
        // *bug* Page blured
        //
        // this.goToFullScreen();
        
    }
    

    navigateTo(router: string) {
        this.router.navigate([router]);
    }

}
