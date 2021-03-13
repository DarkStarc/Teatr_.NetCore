import { CommonModule } from '@angular/common';
import { NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, RouterModule, Routes } from "@angular/router";
import { ImageModule } from '../../assist_nodes/image/image.module';
import { PreloaderService } from '../../assist_nodes/preloader/preloader.service';
import { HistonicComponent } from './histonic.component';

const moduleRoutes: Routes = [
    { path: '', component: HistonicComponent }
];

@NgModule({
    declarations: [HistonicComponent],
    imports: [ CommonModule, RouterModule.forChild(moduleRoutes), ],
    exports: [HistonicComponent]
})
export class HistonicModule implements OnInit {
    private id: number;
    constructor(public preloader: PreloaderService, private router: Router, private params: ActivatedRoute) {

        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart && event.url == "/Histonic") {
                this.preloader.SetMaxCountToLoad(2);
            }
        })

        this.preloader.SetMaxCountToLoad(2);
    }

    ngOnInit() {
        this.params.params.subscribe(param => this.id = param["id"]);

        console.log(this.id);
    }

}