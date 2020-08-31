import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SliderModule } from 'primeng/slider';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';
import { ButtonModule } from 'primeng/button';

import { PreferencesComponent } from './preferences.component';
import { AppPrefPickerModule } from '../../../components/pref-picker/pref-picker.module';

export const routes: Routes = [
  { path: '', component: PreferencesComponent },
];

@NgModule({
  declarations: [PreferencesComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TranslateModule,
    SliderModule,
    SelectButtonModule,
    ButtonModule,
    DropdownModule,
    ChipsModule,
    AppPrefPickerModule,
    RouterModule.forChild(routes),
  ],
  providers: [DatePipe],
})
export class AppPreferencesFormModule { }
