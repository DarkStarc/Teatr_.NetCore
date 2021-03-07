import { Component, Injectable, Input } from '@angular/core';
import { ImageComponent } from '../image/image.component';

export interface IHistonic {
    id: number;
    VideoUrl: string;
    Name: string;
    Description: string;
    Roles: string;
    Images: ImageComponent[]
    Time: Date;
}

@Component({
    selector: 'div.histonic',
    template:``,
})

@Injectable()
export class HistonicComponent implements IHistonic {
    @Input() id: number;
    @Input() VideoUrl: string;
    @Input() Name: string;
    @Input() Description: string;
    @Input() Roles: string;
    @Input() Images: ImageComponent[]
    @Input() Time: Date;

    constructor(id: number,Name: string, Description: string, Roles: string, Time: Date, VideoUrl: string, Images: ImageComponent[]) {
        this.id = id;
        this.Name = Name;
        this.Description = Description;
        this.Roles = Roles;
        this.Time = Time;
        this.VideoUrl = VideoUrl;
        this.Images = Images;
    }
}