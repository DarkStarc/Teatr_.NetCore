import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, NavigationStart } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PerfomancesComponent } from './perfomances.component';
const moduleRoutes = [
    { path: '', component: PerfomancesComponent }
];
let PerfomancesModule = class PerfomancesModule {
    constructor(preloader, router) {
        this.preloader = preloader;
        this.router = router;
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart && event.url == "/Perfomances") {
                this.preloader.SetMaxCountToLoad(0);
            }
        });
        this.preloader.SetMaxCountToLoad(0);
    }
};
PerfomancesModule = __decorate([
    NgModule({
        declarations: [PerfomancesComponent],
        imports: [HttpClientModule, CommonModule, RouterModule.forChild(moduleRoutes)],
        exports: [PerfomancesComponent],
    })
], PerfomancesModule);
export { PerfomancesModule };
//# sourceMappingURL=perfomances.module.js.map