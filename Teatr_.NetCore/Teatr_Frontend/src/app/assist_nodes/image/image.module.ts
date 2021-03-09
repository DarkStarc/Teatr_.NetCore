import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { HttpService } from '../../http.service';
import { PreloaderService } from '../preloader/preloader.service';
import { ImageComponent } from './image.component';
import { ImageCarouselComponent } from './imageCarousel/imageCarousel.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ImageComponent, ImageCarouselComponent],
    exports: [ImageComponent, ImageCarouselComponent],
    providers: [HttpService]
})
export class ImageModule {
    constructor(public preloader: PreloaderService, private httpService: HttpService) { }
}