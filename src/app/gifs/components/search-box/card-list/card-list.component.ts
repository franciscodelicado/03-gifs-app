import { Component, Input, OnInit } from '@angular/core';

import { Gif } from '../../../interfaces/gif.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
})
export class CardListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public gifs: Gif[] = [];
}
