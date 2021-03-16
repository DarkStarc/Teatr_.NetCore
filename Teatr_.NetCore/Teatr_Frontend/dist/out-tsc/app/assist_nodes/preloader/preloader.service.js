import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let PreloaderService = class PreloaderService {
    constructor() {
        this.isLoad = false;
        this.maxCountVal = 1;
        this.currentCountVal = 0;
        this.errorMessage = null;
        this.maxCountFirstLoad = 0;
    }
    CheckStatusPreloader() {
        if (this.currentCountVal >= this.maxCountVal) {
            this.isLoad = true;
        }
        else {
            this.isLoad = false;
        }
        //console.log("check", this.currentCountVal, this.maxCountVal, this.isLoad);
    }
    SetErrorMessage(val) {
        this.errorMessage = val;
    }
    GetErrorMessage() {
        return this.errorMessage;
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
        console.log(this.currentCountVal, this.maxCountVal);
    }
    GetStatus() {
        return this.isLoad;
    }
    SetMaxCountToFirstLoad(val) {
        this.maxCountFirstLoad = val;
    }
    SetMaxCountToLoad(val, firstLoad = false) {
        //console.log("setPreloader", val);
        this.currentCountVal = 0;
        if (firstLoad && this.maxCountVal > this.maxCountFirstLoad) {
            this.maxCountVal += val;
        }
        else {
            this.maxCountVal = val;
        }
        this.CheckStatusPreloader();
    }
};
PreloaderService = __decorate([
    Injectable()
], PreloaderService);
export { PreloaderService };
//# sourceMappingURL=preloader.service.js.map