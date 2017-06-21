import { Injectable } from '@angular/core';
import { Review } from './review.model';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
@Injectable()
export class ReviewService {
  reviews: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.reviews = database.list('reviews');
  }

  getReviews() {
    return this.reviews;
  }

  addReview(newReview: Review) {
    this.reviews.push(newReview);
  }
}
