import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio';
import { Ng5SliderModule } from 'ng5-slider';
import { CheckboxModule } from 'primeng/checkbox';

import { PreferencesComponent } from './preferences.component';

@NgModule({
  declarations: [PreferencesComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatRadioModule, Ng5SliderModule, CheckboxModule],
  exports: [PreferencesComponent],
})
export class AppPreferencesModule { }
