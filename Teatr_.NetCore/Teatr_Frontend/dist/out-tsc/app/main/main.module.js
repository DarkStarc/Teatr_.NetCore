import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ImageCarousel } from '../image/imageCarousel/imageCarousel.component';
import { PromotionComponent } from './promotion/promotion.component';
import { MainComponent } from './main.component';
import { ImageComponent } from '../image/image.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
const moduleRoutes = [
    { path: '', component: MainComponent }
];
let MainModule = class MainModule {
    constructor(preloader) {
        this.preloader = preloader;
        this.preloader.SetMaxCountToLoad(2);
    }
};
MainModule = __decorate([
    NgModule({
        declarations: [MainComponent, ImageCarousel, PromotionComponent, ImageComponent],
        imports: [HttpClientModule, CommonModule, RouterModule.forChild(moduleRoutes)],
        exports: [MainComponent, PromotionComponent],
    })
], MainModule);
export { MainModule };
//# sourceMappingURL=main.module.js.map