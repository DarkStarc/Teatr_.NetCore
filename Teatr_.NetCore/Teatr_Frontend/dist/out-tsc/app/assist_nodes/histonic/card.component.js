import { __decorate } from "tslib";
import { Component, Injectable, Input } from '@angular/core';
let HistonicCardComponent = class HistonicCardComponent {
    constructor() {
        this.width = "auto";
    }
    set(id, Name, Description, Preview) {
        this.id = id;
        this.name = Name;
        this.description = Description;
        this.preview = Preview;
    }
};
__decorate([
    Input()
], HistonicCardComponent.prototype, "id", void 0);
__decorate([
    Input()
], HistonicCardComponent.prototype, "name", void 0);
__decorate([
    Input()
], HistonicCardComponent.prototype, "description", void 0);
__decorate([
    Input()
], HistonicCardComponent.prototype, "preview", void 0);
__decorate([
    Input()
], HistonicCardComponent.prototype, "width", void 0);
HistonicCardComponent = __decorate([
    Component({
        selector: 'div.card',
        templateUrl: 'card.html',
    }),
    Injectable()
], HistonicCardComponent);
export { HistonicCardComponent };
//# sourceMappingURL=card.component.js.map