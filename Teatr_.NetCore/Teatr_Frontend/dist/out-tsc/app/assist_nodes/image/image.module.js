import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { HttpService } from '../../http.service';
import { ImageComponent } from './image.component';
import { ImageCarouselComponent } from './imageCarousel/imageCarousel.component';
let ImageModule = class ImageModule {
    constructor(preloader, httpService) {
        this.preloader = preloader;
        this.httpService = httpService;
    }
};
ImageModule = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [ImageComponent, ImageCarouselComponent],
        exports: [ImageComponent, ImageCarouselComponent],
        providers: [HttpService]
    })
], ImageModule);
export { ImageModule };
//# sourceMappingURL=image.module.js.map