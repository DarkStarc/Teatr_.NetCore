import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NavigationStart, RouterModule } from "@angular/router";
import { ImageModule } from '../../assist_nodes/image/image.module';
import { HistonicComponent } from './histonic.component';
const moduleRoutes = [
    { path: '', component: HistonicComponent }
];
let HistonicModule = class HistonicModule {
    constructor(preloader, router, params) {
        this.preloader = preloader;
        this.router = router;
        this.params = params;
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart && event.url == "/Histonic") {
                this.preloader.SetMaxCountToLoad(1);
            }
        });
        this.preloader.SetMaxCountToLoad(1);
    }
};
HistonicModule = __decorate([
    NgModule({
        declarations: [HistonicComponent],
        imports: [HttpClientModule, ImageModule, CommonModule, RouterModule.forChild(moduleRoutes)],
        exports: [HistonicComponent]
    })
], HistonicModule);
export { HistonicModule };
//# sourceMappingURL=histonic.module.js.map