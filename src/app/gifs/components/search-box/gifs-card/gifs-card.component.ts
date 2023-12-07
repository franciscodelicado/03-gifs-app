import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../../interfaces/gif.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
})
export class GifsCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (!this.gif) throw new Error('Gif is required');
  }
  @Input()
  public gif!: Gif;
}
