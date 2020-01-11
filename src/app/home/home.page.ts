import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../services/auth-constant';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private storageService: StorageService,
        private menuController: MenuController,
        private actRoute: ActivatedRoute,
        private authService: AuthService) {
            this.menuController.enable(true);


            this.authService.userData$.subscribe(data => {
                console.log(data);
            })

    }

}
