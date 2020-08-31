import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { CheckboxModule } from 'primeng/checkbox';
import { PrefPickerComponent } from './pref-picker.component';

@NgModule({
  imports: [
    CommonModule,
    CheckboxModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [PrefPickerComponent],
  declarations: [PrefPickerComponent]
})
export class AppPrefPickerModule { }
