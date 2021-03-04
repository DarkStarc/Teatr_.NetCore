import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { HttpService } from '../../http.service';
import { ImageComponent } from '../../image/image.component';
import { PreloaderService } from '../../preloader/preloader.service'

@Component({
    selector: 'div.promotion-content',
    templateUrl: "promotion.html",
    styleUrls:['./promotion.css'],
    providers: [HttpService]
})
export class PromotionComponent implements OnInit
{
    images: ImageComponent[];
    isMaximize: boolean = false;

    constructor(private httpService: HttpService, public preloader: PreloaderService) { }

    ngOnInit() {
        this.httpService.getImagesPaths("Promotion")
            .pipe(finalize(() => { this.preloader.SetStatusPreloader(true)}))
            .subscribe(data => { this.images = data });
       
    }

}
