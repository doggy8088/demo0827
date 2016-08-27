import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  title: string;

  subtitle = '記載著 Will 在網路世界的學習心得與技術分享';

  num = 1;

  constructor() { }

  ngOnInit() {
  }

  changeTitle() {
    this.title = "The Will Will Web";
  }

  showIcons = true;

  plusOne($event: MouseEvent) {

    this.showIcons = !this.showIcons;

    console.log($event);
    if($event.shiftKey) {
      this.num = this.num - 1;
    } else {
      this.num = this.num + 1;
    }
  }

  getClass() {
    return {'red': (this.num % 2)==0};
  }

}
