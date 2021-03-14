import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../assist_nodes/histonic_cards/card.component';
import { PreloaderService } from '../../assist_nodes/preloader/preloader.service';
import { HttpService } from '../../http.service';

@Component({
    selector: 'perfomances',
    templateUrl: "perfomances.html",
    styleUrls:["perfomances.css"]
})
export class PerfomancesComponent implements OnInit {
    public bigSceneCards: CardComponent[];
    public smallSceneCards: CardComponent[];
    public forKidsCards: CardComponent[];

    constructor(private httpService: HttpService, public preloader: PreloaderService) { }

    ngOnInit() {
        this.httpService.getHistonicCard("Велика сцена").subscribe(data => this.bigSceneCards = data);
        this.httpService.getHistonicCard("Мала сцена").subscribe(data => this.smallSceneCards = data);
        this.httpService.getHistonicCard("Для дітей").subscribe(data => this.forKidsCards = data);
    }

}