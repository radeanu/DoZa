import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferencesComponent } from './preferences.component';

@NgModule({
  declarations: [PreferencesComponent],
  imports: [CommonModule],
  exports: [PreferencesComponent],
})
export class AppPreferencesModule {}
