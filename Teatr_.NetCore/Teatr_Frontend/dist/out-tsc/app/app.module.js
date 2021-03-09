import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './assist_nodes/navbar/navbar.component';
import { PreloaderComponent } from './assist_nodes/preloader/preloader.component';
import { PreloaderService } from './assist_nodes/preloader/preloader.service';
const appRoute = [
    { path: "", loadChildren: () => import("./mainRouting_nodes/main/main.module").then(m => m.MainModule) },
    { path: "Perfomances", loadChildren: () => import("./MainRouting_nodes/perfomances/perfomances.module").then(m => m.PerfomancesModule) }
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