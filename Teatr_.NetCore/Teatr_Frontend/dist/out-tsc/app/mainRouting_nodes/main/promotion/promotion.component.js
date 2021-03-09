import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { HttpService } from '../../../http.service';
let PromotionComponent = class PromotionComponent {
    constructor(httpService, preloader) {
        this.httpService = httpService;
        this.preloader = preloader;
        this.isMaximize = false;
    }
    ngOnInit() {
        this.httpService.getImagesPaths("Promotion")
            .pipe(finalize(() => { this.preloader.SetStatusPreloader(true); }))
            .subscribe(data => { this.images = data; });
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