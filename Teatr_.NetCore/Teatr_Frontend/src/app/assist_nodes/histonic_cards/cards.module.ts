import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpService } from '../../http.service';
import { ImageModule } from '../image/image.module';
import { PreloaderService } from '../preloader/preloader.service';
import { CardComponent } from './card.component';
import { HistonicComponentCard } from './histonic_card.component';

@NgModule({
    declarations: [CardComponent, HistonicComponentCard],
    imports: [CommonModule, RouterModule, ImageModule],
    exports: [CardComponent, HistonicComponentCard],
    providers: [HttpService]
})
export class CardsModule {
    constructor(public preloader: PreloaderService, private httpService: HttpService, private router: Router) { }
}