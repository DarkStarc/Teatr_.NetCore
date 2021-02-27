import { Component } from '@angular/core';

@Component({
    selector: 'nav',
    templateUrl: 'navbar.html',
    styles: [`

    .nav-item.active a{
        background-color:#E9F2F1;
        color:#025940;
        box-shadow: 0.125rem -0.25rem rgba(0,0,0,.075)!important;
    }
    .nav-item a{
        font-weight:bold;
        color: #025940;

    }
    .nav-item:hover a{
        transition:0.3s;
        transition-timing-function:ease-out;
        background-color:#E9F2F1;
        color:#025940;
        box-shadow: 0.125rem -0.25rem rgba(0,0,0,.075)!important;
    }`],
})
    
export class NavbarComponent { }