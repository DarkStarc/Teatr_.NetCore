import { Component, OnInit } from '@angular/core';
import { HistonicCardComponent } from '../../assist_nodes/histonic/card.component';
import { PreloaderService } from '../../assist_nodes/preloader/preloader.service';
import { HttpService } from '../../http.service';

@Component({
    selector: 'perfomances',
    templateUrl: "perfomances.html",
    styleUrls:["perfomances.css"]
})
export class PerfomancesComponent implements OnInit {
    private cards: HistonicCardComponent[];
    constructor(private httpService: HttpService, public preloader: PreloaderService) { }
    ngOnInit() {

    }
}