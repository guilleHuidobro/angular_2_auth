import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {ApiService} from './api.service';
import {NavbarComponent} from './navbar.component';

@Component({
    selector: 'home-test',
    directives:[NavbarComponent],
    providers: [ApiService],
    template: `
<style>
.demo-card-square.mdl-card {
  width: 320px;
  height: 320px;
}
.demo-card-square > .mdl-card__title {
  color: #fff;
  background:
    url('http://38.media.tumblr.com/avatar_6dd2804cc9d8_128.png') bottom right 15% no-repeat #46B6AC;
}

.demo-card-square > #card-dog {
  color: #fff;
  background:
    url('https://38.media.tumblr.com/avatar_05f29b8ad11a_128.png') bottom right 15% no-repeat #46B6AC;
}

.demo-card-square > #card-baby {
  color: #fff;
  background:
    url('https://33.media.tumblr.com/eedcca3f0102b3bb30ea3e7ed2f3f102/tumblr_inline_mkrsel4z6h1qz4rgp.png') bottom right 15% no-repeat #46B6AC;
}

</style>
<div class="mdl-layout mdl-js-layout">
<navbar></navbar>
  <main class="mdl-layout__content">
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--4-col">
      
       <div class="demo-card-square mdl-card mdl-shadow--2dp">
        <div id="card-cat" class="mdl-card__title mdl-card--expand">
        <h2 class="mdl-card__title-text">Update</h2>
        </div>
        <div class="mdl-card__supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenan convallis.
        </div>
       </div>      
    
      
      </div>
      <div class="mdl-cell mdl-cell--4-col">
     
      <div class="demo-card-square mdl-card mdl-shadow--2dp">
        <div id="card-baby" class="mdl-card__title mdl-card--expand">
        <h2 class="mdl-card__title-text">Update</h2>
        </div>
        <div class="mdl-card__supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenan convallis.
        </div>
       </div>      
      </div>
      
      <div class="mdl-cell mdl-cell--4-col">
      
       <div class="demo-card-square mdl-card mdl-shadow--2dp">
        <div id="card-dog" class="mdl-card__title mdl-card--expand">
        <h2 class="mdl-card__title-text">Update</h2>
        </div>
        <div class="mdl-card__supporting-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenan convallis.
        </div>
       </div> 
      
      
      </div>
    </div>     
  </main>
  
</div>






<footer class="mdl-mini-footer">
  <div class="mdl-mini-footer__left-section">
    <div class="mdl-logo">Title</div>
    <ul class="mdl-mini-footer__link-list">
      <li><a href="#">Help</a></li>
      <li><a href="#">Privacy & Terms</a></li>
    </ul>
  </div>
</footer>

    `
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