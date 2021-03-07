import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PerfomancesComponent } from './perfomances.component';
const moduleRoutes = [
    { path: '', component: PerfomancesComponent }
];
let PerfomancesModule = class PerfomancesModule {
    constructor(preloader) {
        this.preloader = preloader;
        this.preloader.SetMaxCountToLoad(1);
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