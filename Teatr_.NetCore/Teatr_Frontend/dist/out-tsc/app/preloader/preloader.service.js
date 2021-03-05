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
            //  console.log("load");
        }
        else {
            this.isLoad = false;
        }
        //console.log(this.currentCountVal, this.maxCountVal);
    }
    GetStatus() {
        return this.isLoad;
    }
    SetMaxCountToLoad(val) {
        this.maxCountVal = val;
    }
};
PreloaderService = __decorate([
    Injectable()
], PreloaderService);
export { PreloaderService };
//# sourceMappingURL=preloader.service.js.map