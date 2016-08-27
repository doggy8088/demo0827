import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css']
})
export class ArticleComponent implements OnInit, OnChanges {

  @Input()
  item: any;

  @Input()
  keyword: string;

  @Output()
  delete = new EventEmitter<any>();

  // deleteArticle(item) {
  //   this.delete.emit(item);
  // }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

  }

}
