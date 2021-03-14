import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, NavigationStart } from '@angular/router';
import { MainComponent } from '../main/main.component';
const moduleRoutes = [
    { path: '', component: MainComponent }
];
let RepresentPerfModule = class RepresentPerfModule {
    constructor(preloader, router) {
        this.preloader = preloader;
        this.router = router;
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart && event.url == "/") {
                this.preloader.SetMaxCountToLoad(2);
            }
        });
        this.preloader.SetMaxCountToLoad(2);
    }
    ngOnInit() {
    }
};
RepresentPerfModule = __decorate([
    NgModule({
        declarations: [],
        imports: [HttpClientModule, CommonModule, RouterModule.forChild(moduleRoutes)],
        exports: [],
    })
], RepresentPerfModule);
export { RepresentPerfModule };
//# sourceMappingURL=representPerf.module.js.map