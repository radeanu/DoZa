import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SnakBarService } from '@shared/helpers';
import { LoginComponent } from './login/login.component';
import { AppFormsModule } from '../../components/forms/app-forms.module';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: LoginComponent }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AppFormsModule,
    MatSnackBarModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [LoginComponent],
  providers: [SnakBarService, DatePipe],
})
export class AppAuthModule { }
