import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import { DashboardComponent } from './dashboard.component';
import { AppPreferencesModule } from './preferences/preferences.module';
import { AppLangSwitchModule } from '../../components/lang-switch/lang-switch.module';
import { AppSideNavModule } from '../../components/side-nav/side-nav.module';

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
    AppPreferencesModule,
    AppSideNavModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    RouterModule.forChild(routes),
  ],
})
export class AppDashboardModule {}
