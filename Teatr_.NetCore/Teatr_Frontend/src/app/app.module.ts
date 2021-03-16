import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './assist_nodes/navbar/navbar.component';
import { PreloaderComponent } from './assist_nodes/preloader/preloader.component';
import { PreloaderService } from './assist_nodes/preloader/preloader.service';
import { ImageModule } from './assist_nodes/image/image.module';
import { HttpClientModule } from '@angular/common/http';

const appRoute: Routes = [
    { path: "", loadChildren: () => import("./mainRouting_nodes/main/main.module").then(m => m.MainModule) },
    { path: "Represent/:id", loadChildren: () => import("./mainRouting_nodes/representPerf/representPerf.module").then(m => m.RepresentPerfModule) },
    { path: "Perfomances", loadChildren: () => import("./mainRouting_nodes/perfomances/perfomances.module").then(m => m.PerfomancesModule) },
    { path: '**', redirectTo: '/' }
]

@NgModule({
    declarations: [AppComponent, NavbarComponent, PreloaderComponent],
    imports: [BrowserModule, HttpClientModule, ImageModule, RouterModule.forRoot(appRoute)],
    providers: [PreloaderService],
    bootstrap: [AppComponent, PreloaderComponent]
})
export class AppModule {

    constructor(public preloader: PreloaderService) {

        this.preloader.SetFirstLoadCount(1);

    }
}
