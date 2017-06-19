import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampgroundListComponent } from './campground-list/campground-list.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CampgroundListComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
