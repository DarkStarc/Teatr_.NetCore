import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistonicComponentCard } from '../../assist_nodes/histonic_cards/histonic_card.component';
import { HttpService } from '../../http.service';

@Component({
    selector: 'represent',
    template: ``,
})
export class RepresentPerfComponent implements OnInit {
    public id: number;
    public histonicCard: HistonicComponentCard;

    constructor(private params: ActivatedRoute, private httpClient: HttpService) { }

    ngOnInit() {
        this.params.params.subscribe(param => this.id = param["id"]);

        this.httpClient.getHistonic(this.id).subscribe(out => this.histonicCard = out);
    }
}