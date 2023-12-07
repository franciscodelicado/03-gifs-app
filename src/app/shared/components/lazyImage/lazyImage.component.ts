import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'share-lazy-image',
  templateUrl: './lazyImage.component.html',
})
export class LazyImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (!this.url) {
      throw new Error('Attribute "url" is required');
    }
  }

  @Input()
  public url!: string;

  @Input()
  public alt!: string;

}
