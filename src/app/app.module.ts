import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CampgroundListComponent } from './campground-list/campground-list.component';
import { routing } from './app.routing';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { CampgroundDetailComponent } from './campground-detail/campground-detail.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AddReviewComponent } from './add-review/add-review.component';
import { masterFirebaseConfig, googleMapsConfig } from './api-keys';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ReviewsComponent } from './reviews/reviews.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    CampgroundListComponent,
    UserComponent,
    CampgroundDetailComponent,
    AddReviewComponent,
    GoogleMapsComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: googleMapsConfig.apiKey
    })
  ],

  providers: [AngularFireAuth],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
