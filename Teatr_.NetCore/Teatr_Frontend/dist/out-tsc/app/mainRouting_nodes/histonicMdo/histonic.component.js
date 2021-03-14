import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HistonicComponent = class HistonicComponent {
    constructor(httpService, params) {
        this.httpService = httpService;
        this.params = params;
    }
    ngOnInit() {
        this.params.params.subscribe(param => this.id = param["id"]);
        this.httpService.getHistonic(this.id).subscribe(data => this.histonicCard = data);
    }
    ngAfterViewChecked() {
        console.log(this.histonicCard);
    }
};
HistonicComponent = __decorate([
    Component({
        selector: 'histonic',
        templateUrl: ''
    })
], HistonicComponent);
export { HistonicComponent };
//# sourceMappingURL=histonic.component.js.map