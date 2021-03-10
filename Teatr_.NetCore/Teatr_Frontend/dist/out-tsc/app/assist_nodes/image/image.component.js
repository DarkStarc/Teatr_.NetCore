import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ImageComponent = class ImageComponent {
    constructor() {
        this.height = "auto";
        this.width = "auto";
        this.MxHeight = "auto";
        this.MxWidth = "auto";
        this.Style = "";
        this.CanMaximize = false;
        this.IsMaximize = false;
    }
    Maximize() {
        if (this.CanMaximize) {
            this.IsMaximize = !this.IsMaximize;
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
], ImageComponent.prototype, "MxHeight", void 0);
__decorate([
    Input()
], ImageComponent.prototype, "MxWidth", void 0);
__decorate([
    Input()
], ImageComponent.prototype, "Style", void 0);
__decorate([
    Input()
], ImageComponent.prototype, "CanMaximize", void 0);
ImageComponent = __decorate([
    Component({
        selector: 'div.image',
        template: `
    <img [attr.alt]='this.title' [attr.src]='path' [style]='Style' [style.height]='height' [style.width]='width' [style.max-height]='MxHeight' [style.max-width]='MxWidth'
                        (click)="Maximize()" [class.btn] = "CanMaximize">
    <img *ngIf="CanMaximize" [class.active] = "IsMaximize" class="maximizeImage" [attr.src]='path' (click)="Maximize()">
    <div *ngIf="CanMaximize" class="background btn"  [class.active] = "IsMaximize" (click)="Maximize()" ></div>
    `,
        styleUrls: ['./image.css'],
    })
], ImageComponent);
export { ImageComponent };
//# sourceMappingURL=image.component.js.map