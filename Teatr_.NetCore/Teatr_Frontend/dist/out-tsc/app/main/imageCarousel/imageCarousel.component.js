import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { HttpService } from '../../http.service';
let ImageCarousel = class ImageCarousel {
    constructor(httpService) {
        this.httpService = httpService;
    }
    ngOnInit() {
        this.httpService.getImagesPaths(this.histonic).subscribe(data => this.paths = data);
    }
};
__decorate([
    Input()
], ImageCarousel.prototype, "histonic", void 0);
ImageCarousel = __decorate([
    Component({
        selector: 'div.carousel-inner',
        template: `<div *ngFor="let path of paths; let i = index" data-interval="5000" style="height:inherit" class="carousel-item" [class.active]="i==0">
					<div [style.background-image]="'url('+path+')'" style="height:inherit;
										background-repeat:no-repeat; background-size:cover;background-position: center;">
					</div>						
			   </div>`,
        providers: [HttpService]
    })
], ImageCarousel);
export { ImageCarousel };
//# sourceMappingURL=imageCarousel.component.js.map