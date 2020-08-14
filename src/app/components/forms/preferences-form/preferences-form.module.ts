import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SliderModule } from 'primeng/slider';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';

import { PreferencesFormComponent } from './preferences-form.component';

@NgModule({
  declarations: [PreferencesFormComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TranslateModule,
    SliderModule,
    SelectButtonModule,
    DropdownModule,
    ChipsModule,
  ],
  exports: [PreferencesFormComponent],
  providers: [DatePipe],
})
export class AppPreferencesFormModule {}
