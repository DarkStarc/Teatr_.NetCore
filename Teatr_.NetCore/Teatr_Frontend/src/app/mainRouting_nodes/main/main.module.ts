import { NgModule} from '@angular/core';
import { ImageCarousel } from '../../assist_nodes/image/imageCarousel/imageCarousel.component'
import { PromotionComponent } from './promotion/promotion.component';
import { MainComponent } from './main.component';
import { ImageComponent } from '../../assist_nodes/image/image.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, Router, NavigationStart } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PreloaderService } from '../../assist_nodes/preloader/preloader.service'


const moduleRoutes: Routes = [
    { path: '', component: MainComponent }
];

@NgModule({
    declarations: [MainComponent, ImageCarousel, PromotionComponent, ImageComponent],
    imports: [HttpClientModule, CommonModule, RouterModule.forChild(moduleRoutes)],
    exports: [MainComponent, PromotionComponent],
})

export class MainModule {
    constructor(public preloader: PreloaderService, private router: Router) {

        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart && event.url == "/") {
               this.preloader.SetMaxCountToLoad(2);
            }
        })

        this.preloader.SetMaxCountToLoad(2);
    }

}

