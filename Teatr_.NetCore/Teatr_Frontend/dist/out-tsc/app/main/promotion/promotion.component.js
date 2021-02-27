import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { HttpService } from '../../http.service';
import { ImageComponent } from '../../image.component';
let PromotionComponent = class PromotionComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.images = new Array();
        this.isMaximize = false;
    }
    ngOnInit() {
        this.httpService.getImagesPaths("Promotion").subscribe(data => {
            data.map(dataItem => {
                let buf = new ImageComponent();
                buf.path = dataItem;
                this.images.push(buf);
            });
        });
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