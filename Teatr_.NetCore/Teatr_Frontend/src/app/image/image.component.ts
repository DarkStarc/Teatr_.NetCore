import { Component,Input } from '@angular/core';

@Component({
    selector: 'div.image',
    template: `
    <img class="p-4" [attr.src]='path' [style.height]='height' [style.width]='width' [style.max-height]='MxHeight' [style.max-width]='MxWidth'
                        (click)="Maximize()" [class.btn] = "CanMaximize">
    <img [class.active] = "IsMaximize" class="maximizeImage" [attr.src]='path' (click)="Maximize()">
    <div *ngIf="CanMaximize" class="background btn"  [class.active] = "IsMaximize" (click)="Maximize()" ></div>
    `,
    styleUrls:['./image.css'],
})


export class ImageComponent {
    @Input() path: string;
    @Input() height: string = "auto";
    @Input() width: string = "auto";
    @Input() MxHeight: string = "auto";
    @Input() MxWidth: string = "auto";
    @Input() CanMaximize: boolean = false;
    IsMaximize: boolean = false;



    Maximize() {
        if (this.CanMaximize) {
            this.IsMaximize = !this.IsMaximize;
        }
    }
}