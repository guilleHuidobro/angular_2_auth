import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {ApiService} from './api.service';

@Component({
    selector: 'navbar',
    providers: [ApiService],
    templateUrl: "app/src/views/navbar.component.html"
})
export class NavbarComponent implements OnInit{
    
public user:any; 
public islogged:boolean = false;

    constructor(private _router: Router, private _apiService: ApiService) {}
    
        ngOnInit() {
        this._apiService.init();
        this.user = this._apiService.getLoggedInAccountEmail();
        if(this.user){
            this.islogged=true;
        }
    }
    
        onLogout() {
        this._apiService.logoutAccount(success => {
            if (success) {
                this._router.navigate(['Home']);
            }
        });
    }


}