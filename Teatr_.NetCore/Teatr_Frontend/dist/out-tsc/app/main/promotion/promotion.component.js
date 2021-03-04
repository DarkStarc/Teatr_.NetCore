import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { HttpService } from '../../http.service';
let PromotionComponent = class PromotionComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.isMaximize = false;
    }
    ngOnInit() {
        this.httpService.getImagesPaths("Promotion").subscribe(data => this.images = data);
    }
};
PromotionComponent = __decorate([
    Component({
        selector: 'div.promotion-content',
        templateUrl: "promotion.html",
        styleUrls: ['./promotion.css'],
        providers: [HttpService]
    })
], PromotionComponent);
export { PromotionComponent };
//# sourceMappingURL=promotion.component.js.map