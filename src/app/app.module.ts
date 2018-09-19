import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemesComponent } from './themes/themes.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { RegionaldashboardComponent } from './dashboard/regionaldashboard/regionaldashboard.component';
import { ParComponent } from './dashboard/par/par.component';
import { ActivitydashboardComponent } from './dashboard/activitydashboard/activitydashboard.component';
import { BranchesComponent } from './settings/branches/branches.component';
import { EditbranchesComponent } from './settings/editbranches/editbranches.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemesComponent,
    DashboardComponent,
    RegionaldashboardComponent,
    ParComponent,
    ActivitydashboardComponent,
    BranchesComponent,
    EditbranchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
