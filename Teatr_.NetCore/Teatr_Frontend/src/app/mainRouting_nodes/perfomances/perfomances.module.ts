import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PreloaderService } from '../../assist_nodes/preloader/preloader.service';
import { Routes, RouterModule, Router, NavigationStart } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PerfomancesComponent } from './perfomances.component';
import { ImageModule } from '../../assist_nodes/image/image.module';

const moduleRoutes: Routes = [
    { path: '', component: PerfomancesComponent }
];

@NgModule({
    declarations: [PerfomancesComponent],
    imports: [HttpClientModule, ImageModule, CommonModule, RouterModule.forChild(moduleRoutes)],
    exports: [PerfomancesComponent],
})

export class PerfomancesModule {
    constructor(public preloader: PreloaderService, private router: Router) {

        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart && event.url == "/Perfomances") {
                this.preloader.SetMaxCountToLoad(1);
            }
        })

        this.preloader.SetMaxCountToLoad(1);
    }
}