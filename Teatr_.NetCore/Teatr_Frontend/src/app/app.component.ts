import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <nav class="navbar navbar-expand-lg w-100 mt-2"></nav>
    <router-outlet></router-outlet>
    `,
})

export class AppComponent {
}
