import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let Promotion_img = class Promotion_img {
    constructor() {
        this.IsMaximize = false;
    }
    Maximize() {
        this.IsMaximize = !this.IsMaximize;
    }
};
__decorate([
    Input()
], Promotion_img.prototype, "path", void 0);
Promotion_img = __decorate([
    Component({
        selector: 'div.promotion-item',
        template: `<img  class="promotion-item-img">`,
    })
], Promotion_img);
export { Promotion_img };
//# sourceMappingURL=promotion-img.component.js.map