import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        template: `
    <nav class="navbar navbar-expand-lg w-100 mt-2"></nav>
    <div class="carousel slide d-flex m-auto" id="image-carousel" data-ride="carousel">
        <span class="user-carousel-caption">
            ХАРКІВСЬКИЙ ДЕРЖАВНИЙ АКАДЕМІЧНИЙ
            ДРАМАТИЧНИЙ ТЕАТР ІМЕНІ Т.Г. ШЕВЧЕНКА
        </span>
        <div histonic="Main" class="carousel-inner shadow" style="height:45vmax;"></div>
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
        }`]
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map