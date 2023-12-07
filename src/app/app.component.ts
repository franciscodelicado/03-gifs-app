import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,

    GifsModule,
    SharedModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gifs-app';
}
