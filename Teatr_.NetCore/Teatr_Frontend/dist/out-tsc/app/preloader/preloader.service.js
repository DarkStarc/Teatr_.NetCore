import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let PreloaderService = class PreloaderService {
    constructor() {
        this.isLoad = false;
        this.maxCountVal = 1;
        this.currentCountVal = 0;
    }
    SetStatusPreloader(val) {
        if (val) {
            this.currentCountVal++;
        }
        else {
            this.currentCountVal--;
        }
        //state
        if (this.currentCountVal == this.maxCountVal) {
            this.isLoad = true;
        }
        else {
            this.isLoad = false;
        }
    }
    GetStatus() {
        return this.isLoad;
    }
};
PreloaderService = __decorate([
    Injectable()
], PreloaderService);
export { PreloaderService };
//# sourceMappingURL=preloader.service.js.map