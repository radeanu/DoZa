import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { SidebarModule } from 'primeng/sidebar';

import { DashboardComponent } from './dashboard.component';
import { AppPreferencesFormModule } from '../../components/forms/preferences-form/preferences-form.module';
import { AppLangSwitchModule } from '../../components/lang-switch/lang-switch.module';
import { AppSideNavModule } from '../../components/side-nav/side-nav.module';
import { AppToolbarModule } from '../../components/toolbar/toolbar.module';
import { AppActivitiesModule } from '../../components/activities/activities.module';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'preferences', component: DashboardComponent },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    TranslateModule,
    AppLangSwitchModule,
    AppPreferencesFormModule,
    AppSideNavModule,
    AppToolbarModule,
    AppActivitiesModule,
    SidebarModule,
    RouterModule.forChild(routes),
  ],
})
export class AppDashboardModule {}
