import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampgroundListComponent } from './campground-list/campground-list.component';
import { CampgroundDetailComponent }   from './campground-detail/campground-detail.component';



const appRoutes: Routes = [
  {
    path: '',
    component: CampgroundListComponent
  },
  {
    path: 'campgrounds/:id',
    component: CampgroundDetailComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
