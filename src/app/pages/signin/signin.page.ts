import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { AuthConstants } from 'src/app/services/auth-constant';
import { ToastService } from 'src/app/services/toast.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.page.html',
    styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

    submited: boolean = false;

    // form
    signinForm: FormGroup;
    signin: any;



    passwordType: string = 'password';
    passwordIco: string = 'eye-off';



    pageData = {
        title: 'Ingresá Ahora',
        subtitle: 'Por favor, ingresá para usar nuestra app'
    };



    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private storageService: StorageService,
        private toastService: ToastService,
        private router: Router
    ) { }



    // hide/show password input field
    hideShowPassword() {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIco = this.passwordIco === 'eye-off' ? 'md-eye' : 'eye-off';
    }


    // easy access controls form
    get f() { return this.signinForm.controls }



    onSubmit() {

        this.submited = true;

        this.signin = this.saveSignin();


        // code send form to api rest.
        if (this.signinForm.valid) this.doSignIn();
    }


    
    doSignIn() {
        this.authService.signin(this.signin).subscribe(
            (res: any) => {

                if (res.success) {
                    this.storageService.store(AuthConstants.AUTH, res).then(data => {
                        this.router.navigate(['/home']);
    
                        this.toastService.presentToast("Log In!");
                    }).catch(err => {
                        console.log('Sign In Error => ', err);
                    });
                } else if (res.error) {
                    this.toastService.presentToast(res.error);
                }

            }, (err) => {
                const error = err.error.error;
                this.toastService.presentToast(error);
            }
        );
    }



    saveSignin() {
        const saveSignin = {
            email: this.signinForm.get('email').value,
            password: this.signinForm.get('password').value
        };

        return saveSignin;
    }



    ngOnInit() {
        // init signin form
        this.signinForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }


}
