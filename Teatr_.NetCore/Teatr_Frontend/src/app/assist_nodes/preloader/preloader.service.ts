import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class PreloaderService {
    private isLoad = false;
    private maxCountVal = 1;
    private fistLoad = 0;
    private currentCountVal = 0;
    private errorMessage: string = null;


    private CheckStatusPreloader() {
       
        if (this.currentCountVal >= this.maxCountVal) {
            this.isLoad = true;

        }
        else {
            this.isLoad = false;
        }

        //console.log("check", this.currentCountVal, this.maxCountVal, this.isLoad);
    }

    SetErrorMessage(val: string) {
        this.errorMessage = val;
    }

    GetErrorMessage(): string {
        return this.errorMessage;
    }

    SetStatusPreloader(val: boolean) {
        
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

    GetStatus(): boolean {
        return this.isLoad;
    }

    SetFirstLoadCount(val: number) {
        //called in main module, other need to wait child modules so maxCountVal set to unreal val, in childModule it be reset to other val
        this.fistLoad = val;
        
        this.maxCountVal = val + 1;
    }

    SetMaxCountToLoad(val: number, firstLoad: boolean = false) {
        console.log("setPreloader", val);

        if (firstLoad) {
            this.maxCountVal = this.fistLoad + val;
        }
        else {
            this.currentCountVal = 0;
            this.maxCountVal = val;
        }


        this.CheckStatusPreloader();
    }

}