import { Component, OnInit,Input } from '@angular/core';
import { HttpService } from '../../http.service';


@Component({
	selector: 'div.carousel-inner',
	template: `<div *ngFor="let path of paths; let i = index" data-interval="5000" style="height:inherit" class="carousel-item" [class.active]="i==0">
					<div [style.background-image]="'url('+path+')'" style="height:inherit;
										background-repeat:no-repeat; background-size:cover;background-position: center;">
					</div>						
			   </div>` ,
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