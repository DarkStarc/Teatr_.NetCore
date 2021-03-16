import { Component, OnInit,Input } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { HttpService } from '../../../http.service';
import { ImageComponent } from '../image.component'
import { PreloaderService } from '../../preloader/preloader.service'

@Component({
	selector: 'div.carousel-inner',
	styles: [`
	.carousel-control-next, .carousel-control-prev {
		width:7% !important;
		opacity:0.1 !important;
	}
	.blur{
	filter: blur(2px) brightness(0.5) contrast(130%) !important;
	}
	`],
	template: `<div *ngFor="let image of images; let i = index" [attr.data-interval]="time"
	style="height:inherit; filter:contrast(105%)" class="carousel-item" [class.active]="i==0" [class.blur] = "this.blur">				
				<div [style.background-image]="'url('+image.path+')'" style="height:inherit;
										background-repeat:no-repeat; background-size:cover;background-position: center;">
					</div>					
			   </div>
 <a class="carousel-control-prev" [attr.href]="id" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" [attr.href]="id" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
` ,
	providers: [HttpService]
})

export class ImageCarouselComponent implements OnInit {
	@Input() images: ImageComponent[];
	@Input() histonic: string;
	@Input() time: number = 5000;
	@Input() id: string;
	@Input() blur: boolean = false;

	constructor(private httpService: HttpService, public preloader: PreloaderService) { }

	ngOnInit() {
		if (this.histonic != null) {
			this.httpService.getImagesPaths(this.histonic)
				.subscribe(data => this.images = data);
		}
	}

}