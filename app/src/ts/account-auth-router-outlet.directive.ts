import {Directive, ElementRef, DynamicComponentLoader, Attribute} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';
import {ApiService} from './api.service';

@Directive({
    selector: 'account-auth-router-outlet',
    providers: [ApiService]
})
export class AccountAuthRouterOutletDirective extends RouterOutlet {
    public publicRoutes: any; // Public route dictionary.
    private parentRouter: Router; // Reference to parent router of this router outlet.
    
    /**
     * AccountAuthRouterOutletDirective Constructor.
     */
    constructor(_elementRef: ElementRef,
                _loader: DynamicComponentLoader,
                _parentRouter: Router,
                @Attribute('name') nameAttr: string,
                private _apiService: ApiService) {
        super(_elementRef, _loader, _parentRouter, nameAttr);

        this.parentRouter = _parentRouter;

        this.publicRoutes = { // Dictionary of routes anyone can access (no auth required).
            '/login': true,
            '/create': true,
            '/home': true
        };
    }

    /**
     * Called by the Router to instantiate a new component during the commit phase of a navigation.
     * This method in turn is responsible for calling the `routerOnActivate` hook of its child.
     *
     * REF: https://github.com/angular/angular/blob/2.0.0-beta.1/modules/angular2/src/router/router_outlet.ts
     */
    activate(instruction: ComponentInstruction) {
        var url = this.parentRouter.lastNavigationAttempt;

        if (!this.publicRoutes[url] && !this._apiService.getLocalStorageSession()) {
            this.parentRouter.navigate(['Home']);
        }
        return super.activate(instruction);
    }
}