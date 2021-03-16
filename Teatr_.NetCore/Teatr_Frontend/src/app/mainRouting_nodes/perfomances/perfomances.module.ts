import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PreloaderService } from '../../assist_nodes/preloader/preloader.service';
import { Routes, RouterModule, Router, NavigationStart } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PerfomancesComponent } from './perfomances.component';
import { ImageModule } from '../../assist_nodes/image/image.module';
import { CardComponent } from '../../assist_nodes/histonic_cards/card.component';
import { CardsModule } from '../../assist_nodes/histonic_cards/cards.module';

const moduleRoutes: Routes = [
    { path: '', component: PerfomancesComponent }
];

@NgModule({
    declarations: [PerfomancesComponent],
    imports: [HttpClientModule, CardsModule, ImageModule, CommonModule, RouterModule.forChild(moduleRoutes)],
    exports: [PerfomancesComponent],
})

export class PerfomancesModule {
    constructor(public preloader: PreloaderService, private router: Router) {

        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart && event.url == "/Perfomances") {
                this.preloader.SetMaxCountToLoad(3);//when we routing
            }
        })
        //when create object
        this.preloader.SetMaxCountToLoad(3,true);
    }
}