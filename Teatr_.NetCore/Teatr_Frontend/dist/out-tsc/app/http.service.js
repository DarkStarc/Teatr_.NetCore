import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let HttpService = class HttpService {
    constructor(http) {
        this.http = http;
    }
    getImagesPaths(ForHistrionic) {
        return this.http.get('/api/images/ImagePathList?usedFor=' + ForHistrionic);
    }
};
HttpService = __decorate([
    Injectable()
], HttpService);
export { HttpService };
//# sourceMappingURL=http.service.js.map