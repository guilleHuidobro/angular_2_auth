import {Injectable} from 'angular2/core';
import {ApiElasticService} from './api-elastic.service';
import {ApiFirebaseService} from './api-firebase.service';
import {Contact} from './contact';

@Injectable()
export class ApiService {
    private elastic: boolean = false;
    private firebase: boolean = true;

    /**
     * ApiService Constructor.
     *
     * @param {ApiElasticService} _apiElasticService - Private Elastic service.
     * @param {ApiFirebaseService} _apiFirebaseService - Private Firebase service.
     */
    constructor(private _apiElasticService: ApiElasticService,
                private _apiFirebaseService: ApiFirebaseService) {}

    /**
     * Get a list of all contacts.  
     */
    getContacts() {
        if (this.elastic) {
            return this._apiElasticService.getContacts();
        }
        else if (this.firebase) {
            return this._apiFirebaseService.getContacts();
        }
    }

    /**
     * Initialize API.
     */
    init() {
        if (this.elastic) {
            return this._apiElasticService.init();
        }
        else if (this.firebase) {
            return this._apiFirebaseService.init();
        }
    }

    /**
     * CREATE a contact.
     *
     * @param {Contact} contact - Contact object.
     */
    createContact(contact: Contact) {
        if (this.elastic) {
            return this._apiElasticService.createContact(contact);
        }
        else if (this.firebase) {
            return this._apiFirebaseService.createContact(contact);
        }
    }

    /**
     * Get (READ) contact by id.
     *
     * @param {number | string} id - Contact id.
     */
    getContact(id: number | string) {
        if (this.elastic) {
            return this._apiElasticService.getContact(id);
        }
        else if (this.firebase) {
            return this._apiFirebaseService.getContact(id);
        }
    }

    /**
     * UPDATE a contact.
     *
     * @param {Contact} contact - Contact object.
     */
    updateContact(contact: Contact) {
        if (this.elastic) {
            return this._apiElasticService.updateContact(contact);
        }
        else if (this.firebase) {
            return this._apiFirebaseService.updateContact(contact);
        }
    }

    /**
     * DELETE contact by id.
     *
     * @param {number | string} id - Contact id.
     */
    deleteContact(id: number | string) {
        if (this.elastic) {
            return this._apiElasticService.deleteContact(id);
        }
        else if (this.firebase) {
            return this._apiFirebaseService.deleteContact(id);
        }  
    }

    /**
     * Create a new user account.
     *
     * @param {string} email - Email of new user.
     * @param {string} password - Password of new user.
     * @param {Function} success - Callback function after create operation completes.
     */
    createAccount(email: string, password: string, success: Function) {
        if (this.elastic) {
            console.log('ERROR: createAccount(email, password, success) for Elastic is not implemented.');
        }
        else if (this.firebase) {
            return this._apiFirebaseService.createAccount(email, password, success);
        } 
    }

    /**
     * Login a user account.
     *
     * @param {string} email - Email of user.
     * @param {string} password - Password of user.
     * @param {Function} success - Callback function after login operation completes.
     */
    loginAccount(email: string, password: string, success: Function) {
        if (this.elastic) {
            console.log('ERROR: loginAccount(email, password, success) for Elastic is not implemented.');
        }
        else if (this.firebase) {
            return this._apiFirebaseService.loginAccount(email, password, success);
        } 
    }

    /**
     * Logout a user account.
     *
     * @param {Function} success - Callback function after logout operation completes.
     */
    logoutAccount(success: Function) {
        if (this.elastic) {
            console.log('ERROR: logoutAccount(success) for Elastic is not implemented.');
        }
        else if (this.firebase) {
            return this._apiFirebaseService.logoutAccount(success);
        }
    }

    /**
     * Delete a user account.
     *
     * @param {string} email - Email of user we are deleting.
     * @param {string} password - Password of user we are deleting.
     * @param {Function} success - Callback function after delete operation completes.
     */
    deleteAccount(email: string, password: string, success: Function) {
        if (this.elastic) {
            console.log('ERROR: deleteAccount(email, password, success) for Elastic is not implemented.');
        }
        else if (this.firebase) {
            return this._apiFirebaseService.deleteAccount(email, password, success);
        }
    }

    /**
     * Returns the email of the logged in user.
     */
    getLoggedInAccountEmail() {
        if (this.elastic) {
            console.log('ERROR: getLoggedInAccountEmail() for Elastic is not implemented.');
        }
        else if (this.firebase) {
            return this._apiFirebaseService.getLoggedInAccountEmail();
        }
    }

    /**
     * Return the local storage session value. 
     */
    getLocalStorageSession() {
        if (this.elastic) {
            console.log('ERROR: getLocalStorageSession() for Elastic is not implemented.');
        }
        else if (this.firebase) {
            return this._apiFirebaseService.getLocalStorageSession();
        }
    }
}