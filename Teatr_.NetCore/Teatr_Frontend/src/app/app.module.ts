import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoute: Routes = [
    { path: "", loadChildren: () => import("./main/main.module").then(m => m.MainModule) }
]

@NgModule({
    declarations: [AppComponent, NavbarComponent],
    imports: [BrowserModule, RouterModule.forRoot(appRoute)],
    bootstrap: [AppComponent]
})
export class AppModule { }
