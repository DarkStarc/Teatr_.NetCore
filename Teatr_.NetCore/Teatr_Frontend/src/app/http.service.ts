import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ImageComponent } from './image/image.component';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService {

    constructor(private http: HttpClient) { }

    getImagesPaths(ForHistrionic: string): Observable<string[]> {
        return this.http.get<string[]>('/api/images/ImagePathList?usedFor=' + ForHistrionic);
    }

}
