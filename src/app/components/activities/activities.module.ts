import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppActivityItemModule } from '../activity-item/activity-item.module';
import { ActivitiesComponent } from './activities.component';

@NgModule({
  imports: [CommonModule, AppActivityItemModule],
  exports: [ActivitiesComponent],
  declarations: [ActivitiesComponent],
})
export class AppActivitiesModule {}
