import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigationStart, RouterModule } from "@angular/router";
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
        this.params.params.subscribe(param => this.id = param["id"]);
        console.log(this.id);
    }
};
HistonicModule = __decorate([
    NgModule({
        declarations: [HistonicComponent],
        imports: [CommonModule, RouterModule.forChild(moduleRoutes),],
        exports: [HistonicComponent]
    })
], HistonicModule);
export { HistonicModule };
//# sourceMappingURL=histonic.module.js.map