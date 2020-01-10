import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../services/auth-constant';
import { MenuController } from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private storageService: StorageService,
        private menuController: MenuController) {

        this.menuController.enable(true);

    }

}
