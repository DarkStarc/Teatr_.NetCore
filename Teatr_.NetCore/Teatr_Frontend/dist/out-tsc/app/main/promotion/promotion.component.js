import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { HttpService } from '../../http.service';
let PromotionComponent = class PromotionComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.isMaximize = false;
    }
    maximize() {
        this.isMaximize = !this.isMaximize;
    }
    ngOnInit() {
        this.httpService.getImagesPaths("Promotion").subscribe(data => {
            console.log(data);
        });
    }
};
PromotionComponent = __decorate([
    Component({
        selector: 'div.promotion-content',
        styles: [`
            div.promotion-item{
                width: 85vmin;
                border:2px solid #93a73e;
            }
            .promotion-item-img{
                width: 100%;
                height:auto;
                border-radius:5vmin;
                padding:2vmax;
            }
           
`],
        templateUrl: "promotion.html",
        providers: [HttpService]
    })
], PromotionComponent);
export { PromotionComponent };
//# sourceMappingURL=promotion.component.js.map