import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ImageCarousel } from './imageCarousel/imageCarousel.component';
import { PromotionComponent } from './promotion/promotion.component';
import { MainViewComponent } from './main.component';
import { ImageComponent } from '../image/image.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
const moduleRoutes = [
    { path: '', component: MainViewComponent }
];
let MainModule = class MainModule {
    constructor(preloader) {
        this.preloader = preloader;
    }
};
MainModule = __decorate([
    NgModule({
        declarations: [MainViewComponent, ImageCarousel, PromotionComponent, ImageComponent],
        imports: [HttpClientModule, CommonModule, RouterModule.forChild(moduleRoutes)],
        exports: [MainViewComponent, PromotionComponent],
    })
], MainModule);
export { MainModule };
//# sourceMappingURL=main.module.js.map