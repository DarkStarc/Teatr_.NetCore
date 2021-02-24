import { Component } from '@angular/core';

@Component({
    selector: 'main',
    templateUrl: `./main.html`,
    styles: [`
        main{
            padding-top:-50px;
        }
        div.carousel{
            width:100%;  
        }
        span.user-carousel-caption {
            z-index: 2;
            margin:auto;
            font-family: 'Yeseva One', cursive;
            color:white;
            font-size:2.2vmax;
            left: 0;
            top:10vmax;
            right: 0;
            text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.5);
            width:40vmax;
        }
    `]
})

export class MainViewComponent
{
}