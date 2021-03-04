import { Component,OnInit } from '@angular/core';
import { PreloaderService } from './preloader.service'


@Component({
    //template: `<div *ngIf="this.preloader.GetStatus()" class='brand'><img src="assets/preloader.svg"></div>`,
    template:`  <div *ngIf="!this.preloader.GetStatus()" class="brand"><svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
                <style>
                    #smallEllipse {
                        animation: Preloader 2s ease;
                        animation-iteration-count:infinite;
                    }

                    @keyframes Preloader {
                        0% {
                        }
                        50% {
                            ry: 190px;
                            rx: 190px;
                        }
                        100% {
                            
                        }
                    }
                </style>
                <ellipse fill-opacity=".75" ry="291.49" rx="300.5" cy="311.443" cx="428.34" opacity="undefined" fill="#dbdbdb" />
                <ellipse ry="291.49" rx="300.5" cy="296.777" cx="411.006" opacity="undefined" fill="#729C62" />
                <ellipse ry="272" rx="275.333" cy="296.581" cx="412.486" opacity="NaN" fill="#fff" />
                <ellipse id="smallEllipse" ry="241.049" rx="248.5" cy="297.488" cx="413" opacity="undefined" fill="#729C62" />
            </svg></div>`,
    selector: 'div.preloader'
})
export class PreloaderComponent {

    constructor(public preloader: PreloaderService) { }
}