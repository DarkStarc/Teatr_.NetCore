import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { PreloaderService } from './preloader/preloader.service'

const appRoute: Routes = [
    { path: "", loadChildren: () => import("./main/main.module").then(m => m.MainModule) }
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
