import { Injectable } from '@angular/core';

@Injectable()
export class PreloaderService {
    private isLoad = false;
    private maxCountVal = 1;
    private currentCountVal = 0;

    SetStatusPreloader(val: boolean) {
        
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

    GetStatus(): boolean {
        return this.isLoad;
    }

    SetMaxCountToLoad(val: number) {
        this.maxCountVal = val;
    }
}