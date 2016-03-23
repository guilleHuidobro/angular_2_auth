import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ApiService} from './api.service';
import {NavbarComponent} from './navbar.component';

@Component({
    selector: 'create',
    directives: [NavbarComponent],
    templateUrl: "app/src/views/account.create.component.html",
    styles: [`.mdl-layout {align-items: center;justify-content: center;}
    .mdl-layout__content {padding: 24px;flex: none;}`]
})
export class AccountCreateComponent {

    /**
     * CreateComponent Constructor.
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
        this._apiService.createAccount(email, password, success => {
            if (success) {
                this._router.navigate(['Login']);
            }
        });
    }

}