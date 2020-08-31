import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppActivityItemModule } from '../../../components/activity-item/activity-item.module';
import { ActivitiesComponent } from './activities.component';

export const routes: Routes = [
  { path: '', component: ActivitiesComponent },
];

@NgModule({
  declarations: [ActivitiesComponent],
  imports: [
    CommonModule,
    AppActivityItemModule,
    RouterModule.forChild(routes)
  ],
})
export class AppActivitiesModule { }
