import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ApiService} from './api.service';
import {NavbarComponent} from './navbar.component';

@Component({
    selector: 'login',
    directives: [NavbarComponent],
    templateUrl: "app/src/views/account.login.component.html",
    styles: [`.mdl-layout {align-items: center;justify-content: center;}
    .mdl-layout__content {padding: 24px;flex: none;}`]
})
export class AccountLoginComponent{
    public loginError = false; // True if there is a login error.

    constructor(private _router: Router,
        private _apiService: ApiService) { }


    onSubmit(email, password) {
        console.log("logueando");
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

}




