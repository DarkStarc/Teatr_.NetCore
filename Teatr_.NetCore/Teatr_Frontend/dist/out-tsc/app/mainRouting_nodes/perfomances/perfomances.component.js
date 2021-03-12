import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PerfomancesComponent = class PerfomancesComponent {
    constructor(httpService, preloader) {
        this.httpService = httpService;
        this.preloader = preloader;
        this.selectedScene = 1;
    }
    ngOnInit() {
        this.httpService.getHistonicCard().subscribe(data => this.cards = data);
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