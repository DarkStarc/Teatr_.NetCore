import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, NavigationStart } from '@angular/router';
import { HttpService } from '../../http.service';
import { RepresentPerfComponent } from './representPerf.component';
const moduleRoutes = [
    { path: '', component: RepresentPerfComponent }
];
let RepresentPerfModule = class RepresentPerfModule {
    constructor(preloader, router) {
        this.preloader = preloader;
        this.router = router;
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart && event.url.startsWith("/Represent")) {
                this.preloader.SetMaxCountToLoad(0);
            }
        });
        this.preloader.SetMaxCountToLoad(0, true);
    }
    ngOnInit() {
    }
};
RepresentPerfModule = __decorate([
    NgModule({
        declarations: [RepresentPerfComponent],
        imports: [HttpClientModule, CommonModule, RouterModule.forChild(moduleRoutes)],
        providers: [HttpService],
        exports: [RepresentPerfComponent],
    })
], RepresentPerfModule);
export { RepresentPerfModule };
//# sourceMappingURL=representPerf.module.js.map