import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageComponent } from './image/image.component';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    getImagesPaths(ForHistrionic: string): Observable<ImageComponent[]> {
        return this.http.get('/api/images/ImagePathList?usedFor=' + ForHistrionic).pipe(map((data: string[]) => {
            return data.map(function (dataPath) {
                let buf = new ImageComponent();
                buf.path = dataPath;
                return buf;
            })
        }));
    }

}
