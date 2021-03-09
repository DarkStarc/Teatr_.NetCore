import { NgModule} from '@angular/core';
import { PromotionComponent } from './promotion/promotion.component';
import { MainComponent } from './main.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule, Router, NavigationStart } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PreloaderService } from '../../assist_nodes/preloader/preloader.service'
import { ImageModule } from '../../assist_nodes/image/image.module';


const moduleRoutes: Routes = [
    { path: '', component: MainComponent }
];

@NgModule({
    declarations: [MainComponent, PromotionComponent],
    imports: [HttpClientModule, ImageModule, CommonModule, RouterModule.forChild(moduleRoutes)],
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

