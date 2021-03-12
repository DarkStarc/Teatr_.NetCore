import { Component,OnInit } from '@angular/core';
import { PreloaderService } from './preloader.service'


@Component({
    template:`  <div [class.hidden]="this.preloader.GetStatus()" class="brand">
             <svg version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="125px"
                              width="250" height="250"  y="125px" viewBox="0 0 232 302" xml:space="preserve">
                    <g id="">
                            <path fill="#C4D84E" stroke="#B3B3B3" stroke-width="0.5" stroke-miterlimit="10" d="M107,239" />
                            <circle id="bottomCircle1" fill="#C4D84E" cx="31.7" cy="273.7" r="14.7" />
                            <circle id="bottomCircle2" fill="#CED36C" cx="85.4" cy="273.7" r="14.7" />
                            <circle id="bottomCircle3" fill="#CFD197" cx="139.2" cy="273.7" r="14.7" />
                            <circle id="bottomCircle4" fill="#D1D3BE" cx="195.3" cy="273.7" r="14.7" />
                            <g>
                            <g>
                            <path fill="none" stroke="#B3B3B3" stroke-width="0.5" stroke-miterlimit="10" d="M107,239" />
		                </g>
                            <g>
                            <path fill="none" stroke="#B3B3B3" stroke-width="0.5" stroke-miterlimit="10" d="M107,239" />
		                </g>
	                </g>
                            <circle fill="#C4D84E" cx="115.5" cy="124.5" r="107.5" />
                            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="8" y1="124.5" x2="223" y2="124.5">
                            <stop offset="0" style="stop-color:#FFFFFF;stop-opacity:0" />
                            <stop offset="8.893190e-02" style="stop-color:#FCFDF6;stop-opacity:0.1115" />
                            <stop offset="0.2372" style="stop-color:#F3F7DC;stop-opacity:0.2975" />
                            <stop offset="0.4266" style="stop-color:#E5EEB2;stop-opacity:0.5351" />
                            <stop offset="0.6474" style="stop-color:#D2E179;stop-opacity:0.812" />
                            <stop offset="0.7973" style="stop-color:#C4D84E" />
                            <stop offset="0.8018" style="stop-color:#C2D54E" />
                            <stop offset="0.831" style="stop-color:#BBCA4D" />
                            <stop offset="0.8722" style="stop-color:#B7C34D" />
                            <stop offset="0.9865" style="stop-color:#B6C14D" />
	                </linearGradient>
                            <circle id="topCicleGrad" fill="url(#SVGID_1_)" cx="115.5" cy="124.5" r="107.5" />
                            <circle fill="#F9F9F9" cx="115" cy="124" r="95" />
                </g>
                <g id="Text">
                            <text transform="matrix(1 0 0 1 31.3335 125)" fill="#1A1A1A" font-family="'FuturaLightC'" font-size="28px">З</text>
                            <text transform="matrix(1 0 0 1 46.8452 125)" fill="#1A1A1A" font-family="'FuturaLightC'" font-size="28px">а</text>
                            <text transform="matrix(1 0 0 1 61.293 125)" fill="#1A1A1A" font-family="'FuturaLightC'" font-size="28px">в</text>
                            <text transform="matrix(1 0 0 1 72.8843 125)" fill="#1A1A1A" font-family="'FuturaLightC'" font-size="28px">а</text>
                            <text transform="matrix(1 0 0 1 87.332 125)" fill="#1A1A1A" font-family="'FuturaLightC'" font-size="28px">н</text>
                            <text transform="matrix(1 0 0 1 100.0439 125)" fill="#1A1A1A" font-family="'FuturaLightC'" font-size="28px">т</text>
                            <text transform="matrix(1 0 0 1 109.5645 125)" fill="#1A1A1A" font-family="'FuturaLightC'" font-size="28px">а</text>
                            <text transform="matrix(1 0 0 1 124.0117 125)" fill="#1A1A1A" font-family="'FuturaLightC'" font-size="28px">ж</text>
                            <text transform="matrix(1 0 0 1 139.6914 125)" fill="#1A1A1A" font-family="'FuturaLightC'" font-size="28px">е</text>
                            <text transform="matrix(1 0 0 1 153.2148 125)" fill="#1A1A1A" font-family="'FuturaLightC'" font-size="28px">н</text>
                            <text transform="matrix(1 0 0 1 165.9268 125)" fill="#1A1A1A" font-family="'FuturaLightC'" font-size="28px">н</text>
                            <text transform="matrix(1 0 0 1 178.6387 125)" fill="#1A1A1A" font-family="'FuturaLightC'" font-size="28px">я</text>
                            <text transform="matrix(1 0 0 1 189.4463 125)" fill="#1A1A1A" font-family="'FuturaLightC'" font-size="28px">.</text>
                            <text transform="matrix(1 0 0 1 196.2227 125)" fill="#1A1A1A" font-family="'FuturaLightC'" font-size="28px">.</text>
                            <text transform="matrix(1 0 0 1 202.998 125)" fill="#1A1A1A" font-family="'FuturaLightC'" font-size="28px">.</text>
                </g>
                </svg>
</div>
`,
    selector: 'div.preloader'
})
export class PreloaderComponent {

    constructor(public preloader: PreloaderService) { }
}