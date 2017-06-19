import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampgroundListComponent } from './campground-list/campground-list.component';


const appRoutes: Routes = [
  {
    path: '',
    component: CampgroundListComponent
  },
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
