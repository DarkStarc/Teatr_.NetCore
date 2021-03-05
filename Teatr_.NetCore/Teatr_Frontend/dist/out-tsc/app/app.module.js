import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { PreloaderService } from './preloader/preloader.service';
const appRoute = [
    { path: "", loadChildren: () => import("./main/main.module").then(m => m.MainModule) }
];
let AppModule = class AppModule {
    constructor(preloader) {
        this.preloader = preloader;
    }
};
AppModule = __decorate([
    NgModule({
        declarations: [AppComponent, NavbarComponent, PreloaderComponent],
        imports: [BrowserModule, RouterModule.forRoot(appRoute)],
        providers: [PreloaderService],
        bootstrap: [AppComponent, PreloaderComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map