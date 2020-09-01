import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CheckboxModule } from 'primeng/checkbox';
import { PickerComponent } from './picker.component';

@NgModule({
  imports: [CommonModule, CheckboxModule, ReactiveFormsModule, FormsModule],
  exports: [PickerComponent],
  declarations: [PickerComponent],
})
export class AppPickerModule {}
