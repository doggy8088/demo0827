import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';

  keyword = '';

  doSearch(keyword: string) {
    this.keyword = keyword;
  }

  deleteArticle(item) {
    let i = this.data.indexOf(item);
    this.data.splice(i, 1);
  }

  constructor(private datasvc: DataService) {
    this.data = datasvc.data;
  }

  data: any[];
}
