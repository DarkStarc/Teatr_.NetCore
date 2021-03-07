import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './assist_nodes/navbar/navbar.component';
import { PreloaderComponent } from './assist_nodes/preloader/preloader.component';
import { PreloaderService } from './assist_nodes/preloader/preloader.service'

const appRoute: Routes = [
    { path: "", loadChildren: () => import("./mainRouting_nodes/main/main.module").then(m => m.MainModule) },
    { path: "Perfomances", loadChildren: () => import("./MainRouting_nodes/perfomances/perfomances.module").then(m => m.PerfomancesModule ) }
]

@NgModule({
    declarations: [AppComponent, NavbarComponent, PreloaderComponent],
    imports: [BrowserModule, RouterModule.forRoot(appRoute)],
    providers: [PreloaderService],
    bootstrap: [AppComponent, PreloaderComponent]
})
export class AppModule {

    constructor(public preloader: PreloaderService) {  }
}
