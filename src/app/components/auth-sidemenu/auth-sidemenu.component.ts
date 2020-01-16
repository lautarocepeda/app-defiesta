import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-auth-sidemenu',
    templateUrl: './auth-sidemenu.component.html',
    styleUrls: ['./auth-sidemenu.component.scss'],
})
export class AuthSidemenuComponent implements OnInit {

    public appPages = [
        {
            title: 'Inicio',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Entrar',
            url: '/signin',
            icon: 'log-in'
        },
        {
            title: 'Registrarse',
            url: '/signup',
            icon: 'list'
        },
        {
            title: 'Mi cuenta',
            url: '#',
            icon: 'person'
        },
        {
            title: 'Desconectar',
            url: '',
            icon: 'log-out',
            action: () => { this.authService.logout(); }
        }
    ];


    constructor(private authService: AuthService) {
    }

    ngOnInit() { }

}
