import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CampgroundListComponent } from './campground-list/campground-list.component';
import { routing } from './app.routing';
import { UserComponent } from './user/user.component';
import { CampgroundDetailComponent } from './campground-detail/campground-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CampgroundListComponent,
    UserComponent,
    CampgroundDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
