import { NgModule } from '@angular/core';
import { ImageCarousel } from './imageCarousel/imageCarousel.component'
import { PromotionComponent } from './promotion/promotion.component';
import { MainViewComponent } from './main.component';
import { ImageComponent } from '../image/image.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PreloaderService } from '../preloader/preloader.service'


const moduleRoutes: Routes = [
    { path: '', component: MainViewComponent }
];

@NgModule({
    declarations: [MainViewComponent, ImageCarousel, PromotionComponent, ImageComponent],
    imports: [HttpClientModule, CommonModule, RouterModule.forChild(moduleRoutes)],
    exports: [MainViewComponent, PromotionComponent],
})
export class MainModule {
    constructor(public preloader: PreloaderService) {
        this.preloader.SetMaxCountToLoad(2);
    }
}

