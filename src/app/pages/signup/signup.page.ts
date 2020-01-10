import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from './validators/email.validator';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AuthConstants } from 'src/app/services/auth-constant';
import { StorageService } from 'src/app/services/storage.service';
import { ToastService } from 'src/app/services/toast.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    //use the same scss than signin page.
    styleUrls: ['../signin/signin.page.scss'],
})
export class SignupPage implements OnInit {


    submited: boolean = false;

    // form
    signupForm: FormGroup;
    signup: any;

    // validating form messages
    validation_messages = {
        'name': [
            { type: 'required', message: 'Nombre es requerido.' },
            { type: 'maxlength', message: 'Ingresa un nombre mas corto.' },
            { type: 'pattern', message: 'Solo se permiten letras y/o números.' }
        ],
        'email': [
            { type: 'required', message: 'Correo es requerido.' },
            { type: 'email', message: 'Ingresa un correo válido.' }
        ],
        'password': [
            { type: 'required', message: 'Contraseña es requerida.' },
            { type: 'minlength', message: 'Debe tener al menos 8 caracteres.' },
            { type: 'maxlength', message: 'Ups! Ocurrió un problema. Vuelve a intentarlo!' }
        ]
    }



    passwordType: string = 'password';
    passwordIco: string = 'eye-off';



    pageData = {
        title: 'Regístrate Ahora',
        subtitle: 'Por favor, completa con tus datos y crea una cuenta'
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



    // form.controls easy access.
    get f() {
        return this.signupForm.controls;
    }



    onSubmit() {
        this.submited = true;

        this.signup = this.saveSignup();

        console.log("Data SignUp =>", this.signup);

        // send form to api rest.
        if (this.signupForm.valid) this.doSignUp();
    }



    doSignUp() {

        this.authService.signup(this.signup).subscribe(
            (res) => {

                console.log("SignUp Response =>", res);

                if (res.success) {
                    // save user data in Storage
                    this.storageService.store(AuthConstants.AUTH, res).then(res => {
                        this.router.navigate(['/home']);
                        this.toastService.presentToast("Sign Up Corrected!");
                    }).catch(err => {
                        console.log("Error storage =>", err)
                    });
                }
                else if (res.error) {
                    for (const err of res.error) this.throwInputError(err.param, err.msg);
                }

            }, (err) => {

                console.error("SignUp Error Response =>", err);

                const err_message = err.error.error;

                if (err.status == 0)
                    this.toastService.presentToast('Servicio no disponible :(');
                else
                    this.throwInputError('email', err_message);

            }
        );

    }



    throwInputError(inputName: string, message: string) {
        this.validation_messages[inputName].push({ type: 'custom', message: message });
        this.signupForm.get(inputName).setErrors({ custom: message });
    }



    saveSignup() {
        const savesignup = {
            name: this.signupForm.get('name').value,
            email: this.signupForm.get('email').value,
            password: this.signupForm.get('password').value
        };

        return savesignup;
    }



    ngOnInit() {
        // init signup form
        this.signupForm = this.formBuilder.group({
            name: ['', [Validators.required,
            Validators.maxLength(25),
            Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')]], // only letters and numbers

            email: ['', Validators.compose([
                Validators.required,
                Validators.email,
                EmailValidator.valid, // my own validation
                Validators.maxLength(50)])],

            password: ['', [Validators.required,
            Validators.minLength(8),
            Validators.maxLength(30)]]
        });
    }


}
