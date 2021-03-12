import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PerfomancesComponent = class PerfomancesComponent {
    constructor(httpService, preloader) {
        this.httpService = httpService;
        this.preloader = preloader;
    }
    ngOnInit() {
        this.httpService.getHistonicCard("Велика сцена").subscribe(data => this.bigSceneCards = data);
        this.httpService.getHistonicCard("Мала сцена").subscribe(data => this.smallSceneCards = data);
        this.httpService.getHistonicCard("Для дітей").subscribe(data => this.forKidsCards = data);
    }
};
PerfomancesComponent = __decorate([
    Component({
        selector: 'perfomances',
        templateUrl: "perfomances.html",
        styleUrls: ["perfomances.css"]
    })
], PerfomancesComponent);
export { PerfomancesComponent };
//# sourceMappingURL=perfomances.component.js.map