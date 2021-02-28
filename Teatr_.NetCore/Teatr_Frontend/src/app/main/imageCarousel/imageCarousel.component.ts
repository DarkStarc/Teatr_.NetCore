import { Component, OnInit,Input } from '@angular/core';
import { HttpService } from '../../http.service';


@Component({
	selector: 'div.carousel-inner',
	styles: [`
	.carousel-control-next, .carousel-control-prev {
		width:7% !important;
		opacity:0.1 !important;
	}`],
	template: `<div *ngFor="let path of paths; let i = index" data-interval="5000" style="height:inherit; filter:contrast(130%) brightness(0.5) blur(2px);" class="carousel-item" [class.active]="i==0">
					<div [style.background-image]="'url('+path+')'" style="height:inherit;
										background-repeat:no-repeat; background-size:cover;background-position: center;">
					</div>						
			   </div>
 <a class="carousel-control-prev" href="#image-carousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#image-carousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
` ,
	providers: [HttpService]
})

export class ImageCarousel implements OnInit {
	paths: string[];

	@Input() histonic: string;

	constructor(private httpService: HttpService) { }

	ngOnInit() {
		this.httpService.getImagesPaths(this.histonic).subscribe(data => this.paths = data)
	}

}