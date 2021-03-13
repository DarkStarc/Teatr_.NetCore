import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActivatedRoute, NavigationStart, RouterModule } from "@angular/router";
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
                this.preloader.SetMaxCountToLoad(2);
            }
        });
        this.preloader.SetMaxCountToLoad(2);
    }
    ngOnInit() {
        this.params.queryParams.subscribe(param => this.id = param["id"]);
        console.log(this.id);
    }
};
HistonicModule = __decorate([
    NgModule({
        declarations: [HistonicComponent],
        imports: [ImageModule, , CommonModule, RouterModule.forChild(moduleRoutes), ActivatedRoute],
        exports: [HistonicComponent]
    })
], HistonicModule);
export { HistonicModule };
//# sourceMappingURL=histonic.module.js.map