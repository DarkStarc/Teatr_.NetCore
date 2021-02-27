﻿import { Component,Input } from '@angular/core';

@Component({
    selector: 'div.image',
    template: `
    <img class="p-4" [attr.src]='path' [style.height]='height' [style.width]='width' [style.max-height]='MxHeight' [style.max-width]='MxWidth'
                        (click)="Maximize()" [class.btn] = "CanMaximize">
    <img *ngIf='IsMaximize' class="maximizeImage" [attr.src]='path' (click)="Maximize()">
    <div *ngIf="CanMaximize" class="background btn"  [class.active] = "IsMaximize" (click)="Maximize()" ></div>
    `,
    styles: [`
        img{
            border-radius:5vh!important;
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