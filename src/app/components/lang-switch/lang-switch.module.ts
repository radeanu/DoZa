import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';

import { LangSwitchComponent } from './lang-switch.component';

@NgModule({
  declarations: [LangSwitchComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, ButtonModule],
  exports: [LangSwitchComponent],
})
export class AppLangSwitchModule {}
