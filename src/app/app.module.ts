import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { masterFirebaseConfig } from './api-keys';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { AgmCoreModule } from 'angular2-google-maps/core';


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
    GoogleMapsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
 apiKey: 'AIzaSyDa2NwAvPw1VD5GVqZjUbt7O24ufhoazds'
 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
