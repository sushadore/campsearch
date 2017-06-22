import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampgroundListComponent } from './campground-list/campground-list.component';
import { UserComponent } from './user/user.component';
import { CampgroundDetailComponent }   from './campground-detail/campground-detail.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { GoogleMapsComponent }   from './google-maps/google-maps.component';
import { BaseCampComponent }   from './base-camp/base-camp.component';


const appRoutes: Routes = [
  {
    path: 'campgrounds/:code/:id',
    component: CampgroundDetailComponent
  },
  {  path: 'add-review',
    component: AddReviewComponent
  },
  {
   path: '',
   component: BaseCampComponent
  }
 ];

NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
