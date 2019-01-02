import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../app/comment.service';
import { Comment } from '../../app/comment';
import * as _ from 'lodash';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [NgbCarouselConfig]
})
export class CommentComponent implements OnInit {

  comment: Comment = new Comment();
  commentsTop10: Comment[] = [];

  showNavigationArrows: boolean = true;
  showNavigationIndicators: boolean = false;

  constructor(private commentService: CommentService,
    config: NgbCarouselConfig) {
      config.showNavigationArrows = true;
      config.showNavigationIndicators = false;
      config.interval = 60 * 1000
  }

  ngOnInit(): void {
    this.getComments();
  }

  private getComments(): void {
    this.commentService.getCommentsTop10().subscribe(comments => {
      this.commentsTop10 = comments;
      this.comment = _.head(this.commentsTop10);
    });
  }

}
