import { Component } from '@angular/core';

@Component({
    selector: 'nav',
    templateUrl: 'navbar.html',
    styles: [`

    .nav-item.active a{
        background-size: 100% 1px;
    }
    .nav-item a{
        font-weight:bold;
        color: white;
        background: linear-gradient(90deg, rgba(255,255,255,1) 100%, rgba(0,0,0,0) 100%);
        background-position: 00% 100%;
        background-repeat: no-repeat;
        background-size: 0% 1px;
        transition: background-size .3s;
    }
    .nav-item:hover a{
        background-size: 100% 1px;
    }
    .navbar-toggler-icon span{
        font-size:1.8rem;
    }
    button.navbar-toggler{
        background-color:#e5e5e554;
        box-shadow: 0px 0px 7px 3px rgba(34, 60, 80, 0.15);
    }
    @media screen and (max-width: 900px){
        .nav-item a{
            color:#303030;
            font-size:1.2rem;
            font-weight: 400;
            border-radius:0.25rem;
            padding-left:5% !important;
        }
        .nav-item.active a{
            background-color: #a9a9a95c;
        }
        .navbar-collapse{
            box-shadow: 0px 0px 7px 3px rgba(34, 60, 80, 0.15);
            border-radius:0.25rem;
            margin:0;
        }
        .navbar-collapse a{
            margin:0 !important;
        }

    }
`],
})
    
export class NavbarComponent { }