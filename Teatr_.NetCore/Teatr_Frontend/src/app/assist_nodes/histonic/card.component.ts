﻿import { Component, Injectable, Input, ViewChild } from '@angular/core';
import { ImageComponent } from '../image/image.component';

@Component({
    selector: 'div.card',
    template:`<a [routerLink]="['/Histonic',this.id]" style="text-decoration:none;color:black;">
    <div class="image" [mxWidth]="width" [path]="preview.path" [title]="preview.title"></div>
    <div class="mt-3">
        <p class="text-center" style="font-size:1.4rem;font-weight:600;color:#a3bf00">{{name}}</p>
        <p class="m-4" style="height:120px;text-overflow:ellipsis; overflow:hidden">{{description}}</p>
    </div>
</a>`,
})

@Injectable()
export class CardComponent {
    @Input() id: number;
    @Input() name: string;
    @Input() description: string;
    @Input() preview: ImageComponent;
    @Input() width: string = "auto";

    set(id: number, Name: string, Description: string, Preview: ImageComponent) {
        this.id = id;
        this.name = Name;
        this.description = Description;
        this.preview = Preview;
    }
}