import { ThemesComponent } from './themes/themes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { RegionaldashboardComponent } from './dashboard/regionaldashboard/regionaldashboard.component';
import { ParComponent } from './dashboard/par/par.component';
import { ActivitydashboardComponent } from './dashboard/activitydashboard/activitydashboard.component';
import { BranchesComponent } from './settings/branches/branches.component';
import { EditbranchesComponent } from './settings/editbranches/editbranches.component';

const routes: Routes = [
  { path: '',  redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'regionaldashboard',
    component: RegionaldashboardComponent
  },
  {
    path: 'par',
    component: ParComponent
  },
  {
    path: 'activitydashboard',
    component: ActivitydashboardComponent
  },
  {
    path: 'themes',
    component: ThemesComponent
  },
  {
    path: 'branches',
    component: BranchesComponent
  },
  {
    path: 'editbranch/:branchcode',
    component: EditbranchesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
