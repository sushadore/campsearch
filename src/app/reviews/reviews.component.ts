import { Component, OnInit } from '@angular/core';
import { Review } from '../review.model';
import { ReviewService } from '../review.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  providers: [ReviewService]
})
export class ReviewsComponent implements OnInit {
  reviews: FirebaseListObservable<any[]>;

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviews = this.reviewService.getReviews();
  }

}
