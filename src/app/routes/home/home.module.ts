import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppLangSwitchModule } from '../../components/lang-switch/lang-switch.module';
import { HomeComponent } from './home.component';

export const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, AppLangSwitchModule, RouterModule.forChild(routes)],
})
export class AppHomeModule {}
