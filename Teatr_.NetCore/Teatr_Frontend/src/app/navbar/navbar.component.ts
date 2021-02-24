import { Component } from '@angular/core';

@Component({
    selector: 'nav',
    templateUrl: 'navbar.html',
    styles: [`
    .nav-item.active a{
        background-color:#93a73e;
        color:white;
    }
    .nav-item a{
        color:black;
    }
    .navbar-toggler{
        alight-self:flex-end;
    }
    .nav-item:hover a{
        transition:0.3s;
        transition-timing-function:ease-out;
        background-color:#93a73e;
        color:white;
    }`],
})
    
export class NavbarComponent { }