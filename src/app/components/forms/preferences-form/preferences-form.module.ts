import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SliderModule } from 'primeng/slider';
import { RadioButtonModule } from 'primeng/radiobutton';

import { PreferencesFormComponent } from './preferences-form.component';

@NgModule({
  declarations: [PreferencesFormComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TranslateModule,
    SliderModule,
    RadioButtonModule,
  ],
  exports: [PreferencesFormComponent],
  providers: [DatePipe],
})
export class AppPreferencesFormModule {}
