import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  ngOnInit() {
  }

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  public searchTag (): void {
    this.gifsService.searchTag(this.tagInput.nativeElement.value);
    this.tagInput.nativeElement.value = '';
  }

}
