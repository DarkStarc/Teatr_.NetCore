import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RepresentPerfComponent = class RepresentPerfComponent {
    constructor(params, httpClient) {
        this.params = params;
        this.httpClient = httpClient;
    }
    ngOnInit() {
        this.params.params.subscribe(param => this.id = param["id"]);
        this.httpClient.getHistonic(this.id).subscribe(out => this.histonicCard = out);
    }
};
RepresentPerfComponent = __decorate([
    Component({
        selector: 'represent',
        template: ``,
    })
], RepresentPerfComponent);
export { RepresentPerfComponent };
//# sourceMappingURL=representPerf.component.js.map