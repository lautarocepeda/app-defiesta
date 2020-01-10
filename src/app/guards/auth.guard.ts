import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../services/auth-constant';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {


    constructor(
        public storageService: StorageService,
        public authService: AuthService,
        public router: Router) { }


    canActivate(): Promise<boolean> {
        return new Promise(resolve => {

            this.storageService.get(AuthConstants.AUTH).then(res => {
                if (res) {
                    resolve(true);
                } else {
                    this.router.navigate(['signin']);
                    resolve(false);
                }
            }).catch(err => {
                resolve(false);
            });
        });
    }

}
