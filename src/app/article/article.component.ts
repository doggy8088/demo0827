import { DataService } from './../data.service';
import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  item: any;

  constructor(private datasvc: DataService) { }

  ngOnInit() {
  }

}
