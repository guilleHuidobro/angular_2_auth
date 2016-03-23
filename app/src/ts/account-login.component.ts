import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ApiService} from './api.service';

@Component({
    selector: 'login',
    template: `
            <a href="home">Home</a>
            <a href="create">Create Account</a>
            <br>
            <br>
            <span class="error" *ngIf="loginError">
                Invalid Email/Password Combination. 
                Please Try Again.
                <br>
                <br>
            </span>
            <form #f="ngForm" (ngSubmit)="onSubmit(email.value, password.value)">
                <label for="email">Email</label>
                <input type="email" #email id="email" required>
                <label for="password">Password</label>
                <input type="password" #password required>
                <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" >Submit</button>
            </form>
    `
})
export class AccountLoginComponent {
    public loginError = false; // True if there is a login error.

    /**
     * AccountLoginComponent Constructor.
     *
     * @param {Router} _router - Private Router injected into this component.
     * @param {ApiService} _apiService - Private ApiService injected into this component.
     * Note: Underscore convention in Angular 2 signifies a private variable.
     */
    constructor(private _router: Router,
                private _apiService: ApiService) {}

    /**
     * Submit click handler.
     */
    onSubmit(email, password) {      
        
        this.loginError = false;

        this._apiService.loginAccount(email, password, success => {
            if (success) {
                this._router.navigate(['Home']);
            }
            else {
                this.loginError = true;
            }
        });
    }
    /*
        googleSignIn(){

            var ref = new Firebase("https://vivid-fire-4443.firebaseio.com");
            ref.authWithOAuthPopup("google", function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {                 
                    console.log("Authenticated successfully with payload:", authData);
                }
            });

        }
    */
}




