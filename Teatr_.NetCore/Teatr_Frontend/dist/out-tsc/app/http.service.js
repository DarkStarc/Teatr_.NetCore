import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ImageComponent } from './image/image.component';
import { map } from 'rxjs/operators';
let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
    }
    getImagesPaths(ForHistrionic) {
        return this.http.get('/api/Image?usedFor=' + ForHistrionic).pipe(map((data) => {
            return data.map(function (dataPath) {
                let buf = new ImageComponent();
                buf.path = dataPath;
                return buf;
            });
        }));
    }
};
HttpService = __decorate([
    Injectable()
], HttpService);
export { HttpService };
//# sourceMappingURL=http.service.js.map