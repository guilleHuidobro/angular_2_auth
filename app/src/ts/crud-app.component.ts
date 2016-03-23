import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import {AccountLoginComponent} from './account-login.component';
import {AccountCreateComponent} from './account-create.component';
import {AccountAuthRouterOutletDirective} from './account-auth-router-outlet.directive';
import {DashboardComponent} from './dashboard.component';
import {HomeComponent} from './home.component';

@Component({
    selector: 'crud-app',
    directives: [AccountAuthRouterOutletDirective],
    template: `
        <account-auth-router-outlet></account-auth-router-outlet> <!-- Display views produced by the router. -->
    `
})
@RouteConfig([ // Configure a router with RouteDefinitions, each mapping a URL path to a component.
    { path: '/', name: 'Home', component: HomeComponent },
    { path: '/dashboard/...', name: 'Dashboard', component: DashboardComponent }, // ... denotes sub-routes in DashboardComponent.
    { path: '/login', name: 'Login', component: AccountLoginComponent },
    { path: '/create', name: 'Create', component: AccountCreateComponent },
    { path: '/home', name: 'Home', component: HomeComponent }
])
export class CrudAppComponent {}