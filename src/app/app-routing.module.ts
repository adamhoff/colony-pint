import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreweriesComponent } from './breweries/breweries.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { BreweryDetailComponent }  from './brewery-detail/brewery-detail.component';

const routes: Routes = [
  { path: 'breweries', component: BreweriesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:breweryId', component: BreweryDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
