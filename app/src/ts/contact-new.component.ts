import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
import {ApiService} from './api.service';

@Component({
    selector: 'contact-new',
    providers: [ApiService],
    template: `
<div class="mdl-grid">
    <div class="mdl-cell mdl-cell--4-col"></div>
    <div class="mdl-cell mdl-cell--8-col">
        <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
            <label for="firstName">First Name</label>
            <input class="" type="text" ngControl="firstName" required>
            <label for="lastName">Last Name</label>
            <input class="" type="text" ngControl="lastName" required>
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="submit">Submit</button>
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" type="button" (click)="onCancel()">Cancel</button>
        </form>
    </div>
</div>
    `
})
export class ContactNewComponent {

    /**
     * ContactNewComponent Constructor.
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
    onSubmit(contact) {
        this._apiService.createContact(contact).then(() => this._router.navigate(['Contacts']));
    }

    /**
     * Cancel click handler.
     */
    onCancel() {
        this._router.navigate(['Contacts']);
    }
}