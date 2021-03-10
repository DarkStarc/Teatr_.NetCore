import { Component, Injectable, Input } from '@angular/core';
import { ImageComponent } from '../image/image.component';

@Component({
    selector: 'div.card',
    template:``,
})

@Injectable()
export class HistonicCardComponent {
    @Input() Id: number;
    @Input() Name: string;
    @Input() Description: string;
    @Input() Preview : ImageComponent;
}