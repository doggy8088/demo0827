import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { HighlightPipe } from './highlight.pipe';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, ArticleComponent, HighlightPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
