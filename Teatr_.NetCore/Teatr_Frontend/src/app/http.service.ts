import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ImageComponent } from './assist_nodes/image/image.component';
import { catchError, finalize, map } from 'rxjs/operators';
import { HistonicCardComponent } from './assist_nodes/histonic/card.component';
import { PreloaderService } from './assist_nodes/preloader/preloader.service';


@Injectable()
export class HttpService {

    constructor(private http: HttpClient,public preloader:PreloaderService) { }

    getImagesPaths(ForHistrionic: string): Observable<ImageComponent[]> {
        return this.http.get('/api/Image?usedFor=' + ForHistrionic).pipe(map((data: string[]) => {
            return data.map(function (dataPath) {
                let buf = new ImageComponent();
                buf.path = dataPath["path"];
                buf.title = dataPath["title"];
                return buf;
            })
        })).pipe(finalize(() => { this.preloader.SetStatusPreloader(true) }));
    }

    getHistonicCard(typeHistonic: string): Observable<HistonicCardComponent[]> {
        return this.http.get('/api/Histonic?typeHistonic=' + typeHistonic).pipe(map((data: Object[]) => {
            return data.map(function (card) {
                let buf = new HistonicCardComponent();
                let bufImage = new ImageComponent();
                bufImage.set(card["preview"]["path"], card["preview"]["title"]);
                buf.set(card["id"],card["name"], card["description"], bufImage);
                return buf;
            });
        })).pipe(finalize(() => { this.preloader.SetStatusPreloader(true) }));
    }

}
