import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, NavigationStart } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PerfomancesComponent } from './perfomances.component';
import { ImageModule } from '../../assist_nodes/image/image.module';
import { CardComponent } from '../../assist_nodes/histonic_cards/card.component';
const moduleRoutes = [
    { path: '', component: PerfomancesComponent }
];
let PerfomancesModule = class PerfomancesModule {
    constructor(preloader, router) {
        this.preloader = preloader;
        this.router = router;
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart && event.url == "/Perfomances") {
                this.preloader.SetMaxCountToLoad(4);
            }
        });
        this.preloader.SetMaxCountToLoad(4);
    }
};
PerfomancesModule = __decorate([
    NgModule({
        declarations: [PerfomancesComponent, CardComponent],
        imports: [HttpClientModule, ImageModule, CommonModule, RouterModule.forChild(moduleRoutes)],
        exports: [PerfomancesComponent, CardComponent],
    })
], PerfomancesModule);
export { PerfomancesModule };
//# sourceMappingURL=perfomances.module.js.map