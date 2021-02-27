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
            position:absolute;
            margin:auto;
            color:white;
            font-size:2.2vmax;
            left: 0;
            top:10vmax;
            right: 0;
            color: white;
            width:40vmax;
        }
    `]
})

export class MainViewComponent
{
}