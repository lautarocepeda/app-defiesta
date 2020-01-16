import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { AuthConstants } from './auth-constant';

@Injectable({
    providedIn: 'root'
})
export class AuthService {


    userData$ = new BehaviorSubject<any>([]);

    constructor(
        private httpService: HttpService,
        private router: Router,
        private storageService: StorageService
    ) { }



    getUserData() {
        this.storageService.get(AuthConstants.AUTH).then(data => {
            this.userData$.next(data);
        });

    }



    signin(data: any): Observable<any> {
        return this.httpService.post('v1/users/login', data);
    }


    signup(data: any): Observable<any> {
        return this.httpService.post('v1/users', data);
    }


    logout() {
        // delete token session
        this.storageService.remove(AuthConstants.AUTH).then(res => {
            this.router.navigate(['/signin']);
        })
    }


    isLoggedIn(): Promise<any> {
        return this.storageService.get(AuthConstants.AUTH);
    }

}
