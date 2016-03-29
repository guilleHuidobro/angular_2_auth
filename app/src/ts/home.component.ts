import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {ApiService} from './api.service';
import {NavbarComponent} from './navbar.component';

@Component({
    selector: 'home-test',
    directives:[NavbarComponent],
    providers: [ApiService],
    templateUrl: "app/src/views/home.component.html"
})
export class HomeComponent implements OnInit{
    
public user:any; 
public islogged:boolean = false;

    /**
     * CreateComponent Constructor.
     *
     * @param {Router} _router - Private Router injected into this component.
     * @param {ApiService} _apiService - Private ApiService injected into this component.
     * Note: Underscore convention in Angular 2 signifies a private variable.
     */
    constructor(private _router: Router, private _apiService: ApiService) {}
    
        ngOnInit() {
        this._apiService.init();
        this.user = this._apiService.getLoggedInAccountEmail();
        if(this.user){
            this.islogged=true;
        }
    }


}