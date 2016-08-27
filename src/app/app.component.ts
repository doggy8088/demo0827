import { DataService } from './data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';

  doSearch(keyword: string) {
    this.datasvc.keyword = keyword;
  }

  constructor(private datasvc: DataService) {
  }

}
