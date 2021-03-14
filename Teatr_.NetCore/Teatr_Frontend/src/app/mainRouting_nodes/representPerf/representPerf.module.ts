import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, NavigationStart } from '@angular/router';
import { PreloaderService } from '../../assist_nodes/preloader/preloader.service';
import { HttpService } from '../../http.service';
import { RepresentPerfComponent } from './representPerf.component';


const moduleRoutes: Routes = [
    { path: '', component: RepresentPerfComponent }
];

@NgModule({
    declarations: [RepresentPerfComponent],
    imports: [HttpClientModule, CommonModule, RouterModule.forChild(moduleRoutes)],
    providers: [HttpService],
    exports: [RepresentPerfComponent],
})
export class RepresentPerfModule {

    constructor(public preloader: PreloaderService, private router: Router) {

        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart && event.url.startsWith("/Represent")) {
                this.preloader.SetMaxCountToLoad(0);
            }
        })

        this.preloader.SetMaxCountToLoad(0);
    }

    ngOnInit() {

    }
}
