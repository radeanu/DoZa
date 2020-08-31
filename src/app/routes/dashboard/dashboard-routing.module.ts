import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'activities'
      },
      {
        path: 'activities',
        loadChildren: () =>
          import('./activities/activities.module').then((m) => m.AppActivitiesModule),
      },
      {
        path: 'preferences',
        loadChildren: () =>
          import('./preferences/preferences.module').then((m) => m.AppPreferencesFormModule),
      }
    ]
  },
  { path: '**', redirectTo: '/' },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppDashboardRoutingModule { }
