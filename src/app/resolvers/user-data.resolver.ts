import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Resolve } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UserDataResolver implements Resolve<any> {

    constructor(private authService: AuthService) {}


    resolve() {
        console.log('Resolved User data');
        return this.authService.getUserData();
    }


}
