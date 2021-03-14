import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
const moduleRoutes = [
    { path: '', component: MainComponent }
];
let GfsModule = class GfsModule {
};
GfsModule = __decorate([
    NgModule({
        declarations: [],
        imports: [HttpClientModule, CommonModule, RouterModule.forChild(moduleRoutes)],
        exports: [],
    })
], GfsModule);
export { GfsModule };
//# sourceMappingURL=gfd.module.js.map