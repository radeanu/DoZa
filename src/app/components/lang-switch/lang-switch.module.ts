import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LangSwitchComponent } from './lang-switch.component';

@NgModule({
  declarations: [LangSwitchComponent],
  imports: [CommonModule],
  exports: [LangSwitchComponent],
})
export class AppLangSwitchModule {}
