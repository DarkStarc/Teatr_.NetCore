import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ImageComponent } from '../../image.component';

@Component({
    selector: 'div.promotion-content',
    templateUrl: "promotion.html",
    styleUrls:['./promotion.css'],
    providers: [HttpService]
})
export class PromotionComponent implements OnInit
{
    images: ImageComponent[] = new Array<ImageComponent>();
    f: string[];
    isMaximize: boolean = false;


    constructor(private httpService: HttpService) { }

    ngOnInit() {
        this.httpService.getImagesPaths("Promotion").subscribe(data => {
            data.map(dataItem=> {
                let buf = new ImageComponent();
                buf.path = dataItem;
                this.images.push(buf);
            })
        });
       
    }

}
