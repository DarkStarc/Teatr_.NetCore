import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ImageComponent = class ImageComponent {
    constructor() {
        this.height = "auto";
        this.width = "auto";
        this.MxHeight = "auto";
        this.MxWidth = "auto";
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
], ImageComponent.prototype, "CanMaximize", void 0);
ImageComponent = __decorate([
    Component({
        selector: 'div.image',
        template: `
    <img class="p-4" [attr.src]='path' [style.height]='height' [style.width]='width' [style.max-height]='MxHeight' [style.max-width]='MxWidth'
                        (click)="Maximize()" [class.btn] = "CanMaximize">
    <img *ngIf='IsMaximize' class="maximizeImage" [attr.src]='path' (click)="Maximize()">
    <div *ngIf="CanMaximize" class="background btn"  [class.active] = "IsMaximize" (click)="Maximize()" ></div>
    `,
        styles: [`
        img{
            max-height:inherit;
            max-width:inherit;
        }
        div.background{
            width:100vw;
            height:100vh;
            z-index:9999;
            display:none;
            background-color:rgba(0,0,0,0.8);
            position:fixed;
            top:0;
            left:0;
        }
        img.maximizeImage{
            position:fixed;
            top:0;
            bottom:0;
            left:0;
            right:0;
            padding:4vmin;
            margin:auto;
            z-index:10000;
            height:100vh !important;
            width:auto !important;
            max-height:initial !important;
            max-width:initial !important;
        }
        .background.active{
            display:block !important;
        }
        @media screen and (max-width: 900px){
        img.maximizeImage{
            width:100vw !important;
            height:auto !important
        }
        }

    `],
    })
], ImageComponent);
export { ImageComponent };
//# sourceMappingURL=image.component.js.map