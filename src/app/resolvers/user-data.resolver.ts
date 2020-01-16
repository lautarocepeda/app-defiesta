import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Resolve } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { AuthConstants } from '../services/auth-constant';

@Injectable({
    providedIn: 'root'
})
export class UserDataResolver implements Resolve<any> {

    constructor(private authService: AuthService, private storageService: StorageService) {}


    resolve() {
        console.log('Resolved User data');
        return this.storageService.get(AuthConstants.AUTH);
    }


}

