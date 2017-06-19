import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampgroundListComponent } from './campground-list/campground-list.component';
import { UserComponent } from './user/user.component';
import { CampgroundDetailComponent }   from './campground-detail/campground-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CampgroundListComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'campgrounds/:id',
    component: CampgroundDetailComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
