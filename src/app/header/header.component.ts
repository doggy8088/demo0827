import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  title = "Angular 2 太強大惹!";

  constructor() { }

  ngOnInit() {
  }

  changeTitle() {
    this.title = "The Will Will Web";
  }

}
