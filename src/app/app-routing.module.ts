import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TribeslistComponent } from './tribeslist/tribeslist.component';
import { TribedetailComponent } from './tribedetail/tribedetail.component';
import { PersonslistComponent } from './personslist/personslist.component'; 
import { PersonsdetailComponent } from './personsdetail/personsdetail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'personslist', component: PersonslistComponent},
  { path: 'persondetail/:id', component: PersonsdetailComponent },
  { path: 'tribes',     component: TribeslistComponent },
  { path: 'tribedetail/:id',     component: TribedetailComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}