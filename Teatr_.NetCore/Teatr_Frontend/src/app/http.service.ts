import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageComponent } from './assist_nodes/image/image.component';
import { map } from 'rxjs/operators';
import { HistonicComponent } from './assist_nodes/histonic/histonic.component';
import { HistonicCardComponent } from './assist_nodes/histonic/card.component';


@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    getImagesPaths(ForHistrionic: string): Observable<ImageComponent[]> {
        return this.http.get('/api/Image?usedFor=' + ForHistrionic).pipe(map((data: string[]) => {
            return data.map(function (dataPath) {
                let buf = new ImageComponent();
                buf.path = dataPath["path"];
                buf.title = dataPath["title"];
                return buf;
            })
        }));
    }

    getHistonicCard(Id: number[]): Observable<HistonicCardComponent[]> {
        return this.http.get('/api/Histonic?card=true').pipe(map(data => {
            let dataList = data[""];
            return dataList.map(function (card: any) {
                return {}
            });
        }));
    }

}
