import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Contact} from './contact';
import {ApiService} from './api.service';
import {NavbarComponent} from './navbar.component';

@Component({
    selector: 'contact-list',
    providers: [ApiService],
    directives: [NavbarComponent],
    templateUrl: "app/src/views/contact.list.component.html",
    styles: [`
        tr {
            cursor: pointer;
        }
        th {
            text-align:left;
        }
        td {
            text-align:left;
        }
    `]
})
export class ContactListComponent implements OnInit {
    public contacts: Contact[]; // List of contacts.

    /**
     * ContactListComponent Constructor.
     *
     * @param {Router} _router - Private Router injected into this component.
     * @param {ApiService} _apiService - Private ApiService injected into this component.
     * Note: Underscore convention in Angular 2 signifies a private variable.
     */
    constructor(private _router: Router, 
                private _apiService: ApiService) {}

    /**
     * Lifecycle Hook: ngOnInit - after the first ngOnChanges.
     * More Info: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
     */
    ngOnInit() {
        this._apiService.getContacts().subscribe(contacts => this.contacts = contacts);
    }

    /**
     * Callback for clicking on a contact.
     */
    onSelect(contact: Contact) {
        this._router.navigate(['ContactDetail', { id: contact.id }]);
    }
}