import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SidebarModule } from 'primeng/sidebar';

import { AppDashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AppLangSwitchModule } from '../../components/lang-switch/lang-switch.module';
import { AppSideNavModule } from '../../components/side-nav/side-nav.module';
import { AppToolbarModule } from '../../components/toolbar/toolbar.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    TranslateModule,
    AppLangSwitchModule,
    AppSideNavModule,
    AppToolbarModule,
    SidebarModule,
    AppDashboardRoutingModule,
  ],
})
export class AppDashboardModule { }
