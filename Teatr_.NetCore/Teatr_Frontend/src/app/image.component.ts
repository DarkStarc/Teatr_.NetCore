import { Component,Input } from '@angular/core';

@Component({
    selector: 'div.image',
    template: `
    <img class="p-4" [attr.src]='path' [style.height]='height' [style.width]='width' (click)="Maximize()" [class.maximized] = "IsMaximize" [class.btn] = "CanMaximize">
    <div *ngIf="CanMaximize" class="background btn" [class.active] = "IsMaximize" (click)="Maximize()" ></div>
    `,
    styles: [`
        img{
            border-radius:5vh!important;
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
        img.maximized{
            position:fixed;
            height:100vh !important;
            width:auto;
            z-index:10000;
            top:0;
            bottom:0;
            left:0;
            right:0;
            margin:auto;
        }
        .background.active{
            display:block !important;
        }
    `],
})
export class ImageComponent {
    @Input() path: string;
    @Input() height: string = "auto";
    @Input() width: string = "auto";
    @Input() CanMaximize: boolean = false;
    IsMaximize: boolean = false;

    Maximize() {
        if (this.CanMaximize) {
            this.IsMaximize = !this.IsMaximize;
        }
    }
}