import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  constructor(private gifsService: GifsService) {
    this.gifsService.getTagsHistoryFromLocalStorage();
  }

  ngOnInit() {
  }

  get tagsHistory (): string[] {
    return this.gifsService.tagsHistory;
  }

  public searchTag (tag: string): void {
    this.gifsService.searchTag(tag);
  }

}
