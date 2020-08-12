import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SnackBarService } from '@shared/helpers';
import { AuthComponent } from './auth.component';
import { AppLangSwitchModule } from '../../components/lang-switch/lang-switch.module';
import { AppFormsModule } from '../../components/forms/app-forms.module';

export const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'sign-up', component: AuthComponent },
];

@NgModule({
  declarations: [AuthComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AppFormsModule,
    MatSnackBarModule,
    TranslateModule,
    AppLangSwitchModule,
    RouterModule.forChild(routes),
  ],
  providers: [SnackBarService, DatePipe],
})
export class AppAuthModule {}
