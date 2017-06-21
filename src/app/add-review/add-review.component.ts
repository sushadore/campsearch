import { Component } from '@angular/core';
import { Review } from '../review.model';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
  providers: [ ReviewService ]
})
export class AddReviewComponent {
  constructor(private reviewService: ReviewService) {}

  submitReview(content: string, rating: string) {
    var newReview: Review = new Review(content, rating);
    console.log(newReview);
    this.reviewService.addReview(newReview);
  }
}
