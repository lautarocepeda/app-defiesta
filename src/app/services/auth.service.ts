import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { AuthConstants } from './auth-constant';
import { Facebook } from '@ionic-native/facebook/ngx';

@Injectable({
    providedIn: 'root'
})
export class AuthService {


    constructor(
        private httpService: HttpService,
        private router: Router,
        private storageService: StorageService,
        private facebook: Facebook
    ) { }



    signin(data: any): Observable<any> {
        return this.httpService.post('v1/users/login', data);
    }


    signup(data: any): Observable<any> {
        return this.httpService.post('v1/users', data);
    }


    // signUp / signIn - Facebook
    authFacebook(fbAuthData: any): Observable<any> {
        return this.httpService.post('v1/auth/facebook', fbAuthData);
    }


    logout() {
        // delete token session
        this.storageService.remove(AuthConstants.AUTH).then(res => {
            this.router.navigate(['/signin']);
        });

        // logout facebook session
        this.facebook.logout().then(data => {
            console.log('LogOut Facebook', data);
        }).catch(error => {
            console.log('[Error LogOut Facebook', error);
        })

    }


    isLoggedIn(): Promise<any> {
        return this.storageService.get(AuthConstants.AUTH);
    }

}
