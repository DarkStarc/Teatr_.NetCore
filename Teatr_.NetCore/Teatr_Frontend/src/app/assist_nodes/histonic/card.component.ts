import { Component, Injectable, Input, ViewChild } from '@angular/core';
import { ImageComponent } from '../image/image.component';

@Component({
    selector: 'div.card',
    templateUrl:'card.html',
})

@Injectable()
export class HistonicCardComponent {
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