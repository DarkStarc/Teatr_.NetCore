import { Component } from '@angular/core';

@Component({
    selector: 'nav',
    templateUrl: 'navbar.html',
    styles: [`

    .nav-item.active a{
        border-bottom:1px solid white;
    }
    .nav-item a{
        font-weight:bold;
        color: white;

    }
    .nav-item:hover a{
        transition:0.3s;
        transition-timing-function:ease-out;
        border-bottom:1px solid white;
    }

`],
})
    
export class NavbarComponent { }