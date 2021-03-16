import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
    <nav class="navbar navbar-expand-lg w-100 mt-2"></nav>
    <div class="carousel slide d-flex m-auto" id="image-carousel" data-ride="carousel" [class.minimizeCarousel] = "this.minimazeImgCarousel">
        <span class="user-carousel-caption">
            ХАРКІВСЬКИЙ ДЕРЖАВНИЙ АКАДЕМІЧНИЙ
            ДРАМАТИЧНИЙ ТЕАТР ІМЕНІ Т.Г. ШЕВЧЕНКА
        </span>
        <div histonic="Main" class="carousel-inner shadow" style="height:45vmax;" [blur]="true"></div>
    </div>
    <router-outlet></router-outlet>
    `,
    styles: [`  
        div.carousel{
            width:100%;  
        }
        span.user-carousel-caption {
            z-index: 2;
            position:absolute;
            color:white;
            font-size:2.2vmax;
            left: 0;
            text-align:center;
            top:12vmax;
            right: 0;
            margin:auto;
            color: white;
            width:40vmax;
        }
        .minimizeCarousel div.carousel-inner{
            height:22.5vmax !important;
        }
        .minimizeCarousel span.user-carousel-caption{
            top:7.5vmax;
            font-size:1.75vmax;
        }
    `]
})

export class AppComponent implements OnInit {
    public minimazeImgCarousel: boolean = false;

    constructor(private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe(event => {

            if (event instanceof NavigationStart) {
                if (event.url == "/") {
                    this.minimazeImgCarousel = false;
                }
                else {
                    this.minimazeImgCarousel = true;
                }
            }

        })
    }

}
