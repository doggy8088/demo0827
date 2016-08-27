import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';

  keyword = '';

  doSearch($event: KeyboardEvent, keyword: string) {
    if($event.keyCode == 13/* Enter */) {
      this.keyword = keyword;
    }
  }
}
