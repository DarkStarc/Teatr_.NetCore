import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ImageComponent } from './assist_nodes/image/image.component';
import { finalize, map } from 'rxjs/operators';
import { CardComponent } from './assist_nodes/histonic/card.component';
let HttpService = class HttpService {
    constructor(http, preloader) {
        this.http = http;
        this.preloader = preloader;
    }
    getImagesPaths(ForHistrionic) {
        return this.http.get('/api/Image?usedFor=' + ForHistrionic).pipe(map((data) => {
            return data.map(function (dataPath) {
                let buf = new ImageComponent();
                buf.path = dataPath["path"];
                buf.title = dataPath["title"];
                return buf;
            });
        })).pipe(finalize(() => { this.preloader.SetStatusPreloader(true); }));
    }
    getHistonicCard(typeHistonic) {
        return this.http.get('/api/Histonic?typeHistonic=' + typeHistonic).pipe(map((data) => {
            return data.map(function (card) {
                let buf = new CardComponent();
                let bufImage = new ImageComponent();
                bufImage.set(card["preview"]["path"], card["preview"]["title"]);
                buf.set(card["id"], card["name"], card["description"], bufImage);
                return buf;
            });
        })).pipe(finalize(() => { this.preloader.SetStatusPreloader(true); }));
    }
};
HttpService = __decorate([
    Injectable()
], HttpService);
export { HttpService };
//# sourceMappingURL=http.service.js.map