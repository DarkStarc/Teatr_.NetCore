import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ImageComponent } from '../../image.component';

@Component({
    selector: 'div.promotion-content',
    styles: [`
            div.promotion-item{
                border:2px solid #93a73e;
            }
            .promotion-item-img{
                width: 100%;
                height:auto;
                border-radius:5vmin;
                padding:2vmax;
            }
           
`],
    templateUrl:"promotion.html" ,
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
            data.map(path => {
                let buf = new ImageComponent();
                buf.path = path;
                this.images.push(buf);
            })
        });
       
    }

}
