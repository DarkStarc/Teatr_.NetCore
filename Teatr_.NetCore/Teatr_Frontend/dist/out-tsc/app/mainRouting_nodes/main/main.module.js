import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PromotionComponent } from './promotion/promotion.component';
import { MainComponent } from './main.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, NavigationStart } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImageModule } from '../../assist_nodes/image/image.module';
const moduleRoutes = [
    { path: '', component: MainComponent }
];
let MainModule = class MainModule {
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
};
MainModule = __decorate([
    NgModule({
        declarations: [MainComponent, PromotionComponent],
        imports: [HttpClientModule, ImageModule, CommonModule, RouterModule.forChild(moduleRoutes)],
        exports: [MainComponent, PromotionComponent],
    })
], MainModule);
export { MainModule };
//# sourceMappingURL=main.module.js.map