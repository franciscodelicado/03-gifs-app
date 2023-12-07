import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gif.interfaces';

const GHIPY_API_KEY = 'LhojnqpNJBayYsoBdkdI8m5RsMb7puZH';
const GHIPY_API_URL = 'https://api.giphy.com/v1/gifs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  public gifsList: Gif [] = [];

  private _tagsHistory: string[] = [];

  constructor(private http: HttpClient) { }

  get tagsHistory (): string[] {
    return [...this._tagsHistory];
  }


  private saveGifsInLocalStorage (): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  public getTagsHistoryFromLocalStorage (): void {
    const tagsHistory = localStorage.getItem('history');
    if (tagsHistory) {
      this._tagsHistory = JSON.parse(tagsHistory);
      this.searchTag(this._tagsHistory[0]);
    }
  }


  async searchTag (tag: string): Promise<void> {
    if (tag.trim().length === 0) {
      return
    }
    tag = tag.trim().toLocaleLowerCase();

    // Delete repeated tags
    this._tagsHistory = this._tagsHistory.filter((oldtag) => oldtag !== tag);

    // Add new tag in the first position
    this._tagsHistory.unshift(tag);

    // Limit the tags history to 10
    this._tagsHistory = this._tagsHistory.splice(0, 10);

    // Save the tags history in the local storage
    this.saveGifsInLocalStorage();

    const params = new HttpParams()
      .set ('api_key', GHIPY_API_KEY)
      .set ('q', tag)
      .set ('limit', '10');


    this.http.get<SearchResponse>(`${GHIPY_API_URL}/search`, { params})
      .subscribe((response) => {
        this.gifsList = response.data;
        console.log({ gifs: this.gifsList});
      });
    }


}

