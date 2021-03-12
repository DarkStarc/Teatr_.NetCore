import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HistonicCardComponent } from '../../assist_nodes/histonic/card.component';
import { PreloaderService } from '../../assist_nodes/preloader/preloader.service';
import { HttpService } from '../../http.service';

@Component({
    selector: 'perfomances',
    templateUrl: "perfomances.html",
    styleUrls:["perfomances.css"]
})
export class PerfomancesComponent implements OnInit {
    public cards: HistonicCardComponent[];
    private selectedScene: number = 1;
    constructor(private httpService: HttpService, public preloader: PreloaderService) { }

    ngOnInit() {
        this.httpService.getHistonicCard().subscribe(data => this.cards = data);
    }

}