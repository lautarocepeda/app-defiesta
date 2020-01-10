import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../services/auth-constant';

@Injectable({
  providedIn: 'root'
})
export class IndexGuard implements CanActivate{


    constructor(
        public storageService: StorageService,
        public router: Router) { }


    canActivate(): Promise<boolean> {
        return new Promise(resolve => {

            this.storageService.get(AuthConstants.AUTH).then(res => {
                if (res) {
                    this.router.navigate(['home']);
                    resolve(false);
                } else {
                    resolve(true);
                }
            }).catch(err => {
                resolve(true);
            });
        });
    }
  
}
