import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';
import { AuthConstants } from './auth-constant';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private httpService: HttpService,
        private router: Router,
        private storageService: StorageService
    ) { }



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
