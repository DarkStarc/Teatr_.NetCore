import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ImageComponent = class ImageComponent {
    constructor() {
        this.height = "auto";
        this.width = "auto";
        this.mxHeight = "auto";
        this.mxWidth = "auto";
        this.style = "";
        this.canMaximize = false;
        this.isMaximize = false;
    }
    set(path, title) {
        this.path = path;
        this.title = title;
    }
    Maximize() {
        if (this.canMaximize) {
            this.isMaximize = !this.isMaximize;
        }
    }
};
__decorate([
    Input()
], ImageComponent.prototype, "path", void 0);
__decorate([
    Input()
], ImageComponent.prototype, "title", void 0);
__decorate([
    Input()
], ImageComponent.prototype, "height", void 0);
__decorate([
    Input()
], ImageComponent.prototype, "width", void 0);
__decorate([
    Input()
], ImageComponent.prototype, "mxHeight", void 0);
__decorate([
    Input()
], ImageComponent.prototype, "mxWidth", void 0);
__decorate([
    Input()
], ImageComponent.prototype, "style", void 0);
__decorate([
    Input()
], ImageComponent.prototype, "canMaximize", void 0);
ImageComponent = __decorate([
    Component({
        selector: 'div.image',
        template: `
    <img [attr.alt]='this.title' [attr.src]='path' [style]='style' [style.height]='height' [style.width]='width' [style.max-height]='mxHeight' [style.max-width]='mxWidth'
                        (click)="Maximize()" [class.btn] = "canMaximize">
    <img *ngIf="canMaximize" [class.active] = "isMaximize" class="maximizeImage" [attr.src]='path' (click)="Maximize()">
    <div *ngIf="canMaximize" class="background btn"  [class.active] = "isMaximize" (click)="Maximize()" ></div>
    `,
        styleUrls: ['./image.css'],
    })
], ImageComponent);
export { ImageComponent };
//# sourceMappingURL=image.component.js.map