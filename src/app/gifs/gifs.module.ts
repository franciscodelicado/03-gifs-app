import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CardListComponent } from './components/search-box/card-list/card-list.component';
import { GifsCardComponent } from './components/search-box/gifs-card/gifs-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    GifsCardComponent
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
