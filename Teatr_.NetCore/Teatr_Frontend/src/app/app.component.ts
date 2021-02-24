import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styles: [`img.logo{
               height:10vh;
               width:auto;      
            }`],
    template: `<img class="logo m-auto d-flex" src="assets/logo.png">
    <nav class="navbar navbar-expand-lg w-75 m-auto"></nav>
    <router-outlet></router-outlet>
    `,
})

export class AppComponent {
}
