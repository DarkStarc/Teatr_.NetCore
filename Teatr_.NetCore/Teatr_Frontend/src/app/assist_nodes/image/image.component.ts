import { Component,Input } from '@angular/core';

@Component({
    selector: 'div.image',
    template: `
    <img [attr.alt]='this.title' [attr.src]='path' [style]='style' [style.height]='height' [style.width]='width' [style.max-height]='mxHeight' [style.max-width]='mxWidth'
                        (click)="Maximize()" [class.btn] = "canMaximize">
    <img *ngIf="canMaximize" [class.active] = "isMaximize" class="maximizeImage" [attr.src]='path' (click)="Maximize()">
    <div *ngIf="canMaximize" class="background btn"  [class.active] = "isMaximize" (click)="Maximize()" ></div>
    `,
    styleUrls:['./image.css'],
})


export class ImageComponent {
    @Input() path: string;
    @Input() title: string;
    @Input() height: string = "auto";
    @Input() width: string = "auto";
    @Input() mxHeight: string = "auto";
    @Input() mxWidth: string = "auto";
    @Input() style: string = "";
    @Input() canMaximize: boolean = false;
    isMaximize: boolean = false;

    set(path: string, title: string) {
        this.path = path;
        this.title = title;
    }

    Maximize() {
        if (this.canMaximize) {
            this.isMaximize = !this.isMaximize;
        }
    }
}