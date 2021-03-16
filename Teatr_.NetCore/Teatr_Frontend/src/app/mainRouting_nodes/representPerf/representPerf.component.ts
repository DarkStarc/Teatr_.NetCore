import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistonicComponentCard } from '../../assist_nodes/histonic_cards/histonic_card.component';
import { HttpService } from '../../http.service';

@Component({
    selector: 'represent',
    templateUrl: `representPerf.html`,
    styles: [`

        .main{
            background-color: #edecec5e;
            box-shadow: 2px 5px 20px 0px rgba(34, 60, 80, 0.1);
            background-clip: border-box;
            border: 1px solid rgba(0,0,0,.125);
            border-radius: .25rem;
        }
    `]
})
export class RepresentPerfComponent implements OnInit {
    public id: number;
    public histonicCard: HistonicComponentCard = new HistonicComponentCard();

    constructor(private params: ActivatedRoute, private httpClient: HttpService) { }

    ngOnInit() {
        this.params.params.subscribe(param => this.id = param["id"]);

        this.httpClient.getHistonic(this.id).subscribe(out => this.histonicCard = out);
    }
}