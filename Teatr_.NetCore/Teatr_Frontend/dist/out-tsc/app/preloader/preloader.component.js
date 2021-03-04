import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PreloaderComponent = class PreloaderComponent {
    constructor(preloader) {
        this.preloader = preloader;
    }
    ngOnInit() {
        this.preloader.SetStatusPreloader(true);
    }
};
PreloaderComponent = __decorate([
    Component({
        template: `<div *ngIf ="this.preloader.GetStatus()" > XUI</div>`,
        selector: 'div.preloader'
    })
], PreloaderComponent);
export { PreloaderComponent };
//# sourceMappingURL=preloader.component.js.map