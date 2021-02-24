import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        styles: [`img.logo{
               height:10vh;
               width:auto;      
            }`],
        template: `<img class="logo m-auto d-flex" src="assets/logo.png">
    <nav class="navbar navbar-expand-lg w-75 m-auto"></nav>
    <router-outlet></router-outlet>
    `,
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map