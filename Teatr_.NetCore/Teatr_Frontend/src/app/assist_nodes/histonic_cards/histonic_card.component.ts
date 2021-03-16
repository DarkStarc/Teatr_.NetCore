import { Component, Injectable, Input } from '@angular/core';
import { ImageComponent } from '../image/image.component';


@Component({
    selector: 'div.histonicCard',
    templateUrl: `histonic_card.html`,
    styles: [`
        .typeScene span{
            color:white;
            background-color:#95af00;
            border-radius:0.75rem;
            margin-left:-15%;
            font-size:16px;
        }
        .typeScene{
           transform:rotate(-25deg);

        }
    `]
})

@Injectable()
export class HistonicComponentCard {

    set( id: number, Name: string, Description: string, Roles: string,TypeScene:string, Time: Date, VideoUrl: string, Images: ImageComponent[]) {
        this.id = id;
        this.name = Name;
        this.description = Description;
        this.roles = Roles;
        this.typeScene = TypeScene;
        this.time = Time;
        this.videoUrl = VideoUrl;
        this.images = Images;
    }

    @Input() id: number;
    @Input() videoUrl: string;
    @Input() name: string;
    @Input() description: string;
    @Input() roles: string;
    @Input() images: ImageComponent[]
    @Input() time: Date;
    @Input() typeScene: string;
   
}