import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) {
    http.get('/api/articles.json').subscribe(res => {
      this.data = res.json();
    });
  }

  keyword: string = '';

  deleteArticle(item) {
    let i = this.data.indexOf(item);
    this.data.splice(i, 1);
  }

  data: any[];
}
