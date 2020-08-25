import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {
    // remains empty as we use Input()
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false; // stops reloading of page when clicking button
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false; // stops reloading of page when clicking button
  }

  ngOnInit() {

  }

}
