import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MainComponent = class MainComponent {
};
MainComponent = __decorate([
    Component({
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
    `]
    })
], MainComponent);
export { MainComponent };
//# sourceMappingURL=main.component.js.map