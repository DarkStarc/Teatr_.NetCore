import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let PreloaderService = class PreloaderService {
    constructor() {
        this.isLoad = false;
        this.maxCountVal = 1;
        this.currentCountVal = 0;
    }
    CheckStatusPreloader() {
        if (this.currentCountVal == this.maxCountVal) {
            this.isLoad = true;
        }
        else {
            this.isLoad = false;
        }
        //console.log("check", this.currentCountVal, this.maxCountVal, this.isLoad);
    }
    SetStatusPreloader(val) {
        if (val) {
            this.currentCountVal++;
        }
        else {
            this.currentCountVal--;
        }
        //state
        this.CheckStatusPreloader();
        //console.log(this.currentCountVal, this.maxCountVal);
    }
    GetStatus() {
        return this.isLoad;
    }
    SetMaxCountToLoad(val) {
        //console.log("setPreloader", val);
        this.currentCountVal = 0;
        this.maxCountVal = val;
        this.CheckStatusPreloader();
    }
};
PreloaderService = __decorate([
    Injectable()
], PreloaderService);
export { PreloaderService };
//# sourceMappingURL=preloader.service.js.map